export default function StatCard({ icon, title, description }) {
  return (
    <div className="bg-card p-6 rounded-lg border border-border flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-3xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
