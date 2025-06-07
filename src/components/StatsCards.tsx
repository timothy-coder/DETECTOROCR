import { Card, CardContent } from "@/components/ui/card";

type Stat = {
  label: string;
  value: string | number;
};

export function StatsCards() {
  const stats: Stat[] = [
    { label: "Usuarios", value: 128 },
    { label: "Ventas", value: "$4,500" },
    { label: "Pedidos", value: 76 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((s, i) => (
        <Card key={i}>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">{s.label}</p>
            <p className="text-2xl font-bold">{s.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}