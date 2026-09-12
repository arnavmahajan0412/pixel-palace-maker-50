import { createFileRoute } from "@tanstack/react-router";
import { ExplorerPage } from "@/components/ExplorerPage";
export const Route = createFileRoute("/passport-guide")({
  component: () => <ExplorerPage kind="passport" />,
});
