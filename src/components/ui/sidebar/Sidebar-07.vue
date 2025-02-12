<script setup lang="ts">
import { ref } from 'vue'

import {
  Collapsible,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar'

import {
  Waypoints,
  Plus,
  Database,
} from 'lucide-vue-next'

const data = {
  teams: [
    { name: 'VGE', logo: Waypoints, plan: 'Visual graph editor' },
  ],
  navMain: [
    {
      title: 'Creation',
      url: '#',
      icon: Plus,
      isActive: true,
    },
    {
      title: 'Exploration',
      url: '#',
      icon: Database,
    },
  ],
}

const activeTeam = ref(data.teams[0])

const selectedItem = ref('')

const isCollapsed = ref(false)

function setActiveItem(title: string) {
  selectedItem.value = title
}

function toggleSidebar() {
  isCollapsed.value = !isCollapsed.value
}
</script>

<template>
  <SidebarProvider>
    <Sidebar :collapsible="isCollapsed ? 'icon' : undefined">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <SidebarMenuButton size="lg"
                  class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                  <div
                    class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <component :is="activeTeam.logo" class="size-4" />
                  </div>
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">{{ activeTeam.name }}</span>
                    <span class="truncate text-xs">{{ activeTeam.plan }}</span>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup class="flex flex-col">
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarMenu class="flex flex-row">
            <div class="flex flex-col">
              <Collapsible v-for="item in data.navMain" :key="item.title" :default-open="item.isActive" as-child
                class="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger as-child>
                    <SidebarMenuButton :tooltip="item.title" class="w-8" @click="setActiveItem(item.title)">
                      <component :is="item.icon" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                </SidebarMenuItem>
              </Collapsible>
            </div>
            <div v-if="selectedItem == 'Creation' && !isCollapsed" class="w-full h-72 bg-muted/50">
              Creation
            </div>
            <div v-if="selectedItem == 'Exploration' && !isCollapsed" class="w-full h-72 bg-muted/50">
              Exploration
            </div>
          </SidebarMenu>
          
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>

    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" @click="toggleSidebar" />
        </div>
      </header>

      <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <p class="text-sm font-semibold">
          Selected Item: {{ selectedItem || 'None yet' }}
        </p>
        <p class="text-sm font-semibold">
          Sidebar is collapsed: {{ isCollapsed }}
        </p>

        <div class="grid auto-rows-min gap-4 md:grid-cols-3">
          <div class="aspect-video rounded-xl bg-muted/50" />
          <div class="aspect-video rounded-xl bg-muted/50" />
          <div class="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
