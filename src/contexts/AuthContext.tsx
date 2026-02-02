import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import {
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string, displayName?: string) => Promise<{ error: Error | null }>;
  signInWithGoogle: () => Promise<{ error: Error | null }>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: Error | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Check for redirect result (for signInWithRedirect flows)
    getRedirectResult(auth).then((result) => {
      if (result && result.user) {
        // If redirect sign-in succeeded, update profile if needed
        if (result.user && !result.user.displayName) {
          updateProfile(result.user, { displayName: result.user.email?.split("@")[0] || "User" }).catch((e) => console.error(e));
        }
      }
    }).catch((err) => {
      // Log but don't break app; show more helpful debug in consuming components
      console.error("getRedirectResult error:", err);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { error: null };
    } catch (error) {
      return { error: error as Error };
    }
  };

  const signUp = async (email: string, password: string, displayName?: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update profile with display name if provided
      if (displayName && userCredential.user) {
        await updateProfile(userCredential.user, { displayName });
      }
      
      return { error: null };
    } catch (error) {
      return { error: error as Error };
    }
  };

  const signInWithGoogle = async () => {
    try {
      // For GitHub Pages (and similar static hosts), popup may be blocked or unauthorized-domain may occur.
      const isGithubPages = typeof window !== 'undefined' && window.location.hostname.includes('github.io');

      if (isGithubPages || process.env.NODE_ENV === 'production') {
        // Use redirect flow for better compatibility on static hosts
        try {
          await signInWithRedirect(auth, googleProvider);
          // redirect will navigate away; we return null error since flow continues after redirect
          return { error: null };
        } catch (err) {
          console.error('signInWithRedirect error:', err);
          return { error: err as Error };
        }
      }

      // Default to popup for local/dev
      const result = await signInWithPopup(auth, googleProvider);

      // Handle any profile updates if needed
      if (result.user && !result.user.displayName) {
        await updateProfile(result.user, {
          displayName: result.user.email?.split("@")[0] || "User",
        });
      }

      return { error: null };
    } catch (error: any) {
      console.error("Google sign-in error:", error);

      if (error.code === "auth/popup-closed-by-user") {
        return { error: error as Error };
      }

      if (error.code === "auth/unauthorized-domain") {
        return { error: new Error("Unauthorized domain: please add your GitHub Pages domain to Firebase Authorized Domains (e.g., malaikaamir778-spe.github.io)"); };
      }

      return { error: error as Error };
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { error: null };
    } catch (error) {
      return { error: error as Error };
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    logout,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
