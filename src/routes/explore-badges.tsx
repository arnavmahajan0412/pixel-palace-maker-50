import { createFileRoute } from "@tanstack/react-router";
import { ExplorerPage } from "@/components/ExplorerPage";
export const Route = createFileRoute("/explore-badges")({
  component: () => <ExplorerPage kind="badges" />,
});
