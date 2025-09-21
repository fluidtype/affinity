"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

type EventPingProps = {
  name: string;
  params?: Record<string, unknown>;
};

export default function EventPing({ name, params }: EventPingProps) {
  useEffect(() => {
    track(name, params);
  }, [name, params]);
  return null;
}
