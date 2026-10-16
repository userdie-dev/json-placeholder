import type { Component } from "vue";

interface Tab {
  id: number;
  title: string;
  content: Component;
  props?: Record<string, unknown>;
}

export type TabList = Tab[];
