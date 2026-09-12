import { createFileRoute } from "@tanstack/react-router";
import { ExplorerPage } from "@/components/ExplorerPage";
export const Route = createFileRoute("/about-us")({
  component: () => <ExplorerPage kind="about" />,
});
