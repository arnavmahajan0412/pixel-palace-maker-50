import { createFileRoute } from "@tanstack/react-router";
import { ExplorerPage } from "@/components/ExplorerPage";
export const Route = createFileRoute("/travel-planner")({
  component: () => <ExplorerPage kind="planner" />,
});
