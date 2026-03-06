"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Toast from "@/components/Toast";
import LoadingButton from "@/components/LoadingButton";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email dan password wajib diisi");
      return;
    }

    setLoading(true);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    setLoading(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Login gagal");
      return;
    }

    setToast("Login berhasil");
    router.push("/admin/dashboard");
  };

  return (
    <main>
      <section className="container" style={{ maxWidth: 420 }}>
        <div className="card" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ margin: 0 }}>Login Admin</h2>
          <p className="label">Hanya admin yang dapat mengelola mobil.</p>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@rajamobil.local"
                required
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                required
              />
            </div>
            {error ? <span style={{ color: "var(--red)" }}>{error}</span> : null}
            <LoadingButton loading={loading} type="submit">
              Login
            </LoadingButton>
          </form>
          <div className="card" style={{ background: "#fff3da" }}>
            <strong>Demo Admin</strong>
            <p className="label">Email: admin@rajamobil.local</p>
            <p className="label">Password: Admin123!</p>
          </div>
        </div>
      </section>
      <Toast message={toast} onClose={() => setToast("")} />
    </main>
  );
}
