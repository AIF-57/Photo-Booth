export default function emailToHandle(email) {
  if (!email || typeof email !== "string") return null;

  const username = email.split("@")[0];
  // Example rule: remove "islam" if present

  return "@" + username;
}
