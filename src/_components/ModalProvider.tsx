"use client";

import ViewTaskModal from "./ViewTaskModal";
import { usePlatformLaunchStore } from "@/store/usePlatformLaunchStore";

export default function ModalProvider() {
  const { isTaskOpen } = usePlatformLaunchStore();

  return <>{isTaskOpen && <ViewTaskModal />}</>;
}
