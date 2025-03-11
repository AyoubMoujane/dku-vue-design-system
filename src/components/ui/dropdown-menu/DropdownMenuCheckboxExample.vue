<script lang="ts" setup>
import type { DropdownMenuCheckboxItemProps } from 'reka-ui'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronUp, X } from 'lucide-vue-next'
import { computed, ref } from 'vue'

type Checked = DropdownMenuCheckboxItemProps['modelValue']

const showStatusBar = ref<Checked>(true)
const showActivityBar = ref<Checked>(true)
const showPanel = ref<Checked>(false)

const isOpen = ref(false)

const allSelected = computed({
    get() {
        return showStatusBar.value && showActivityBar.value && showPanel.value
    },
    set(newValue) {
        showStatusBar.value = newValue
        showActivityBar.value = newValue
        showPanel.value = newValue
    },
})

const indeterminate = computed(() => {
    const values = [showStatusBar.value, showActivityBar.value, showPanel.value]
    const checkedCount = values.filter(Boolean).length
    return checkedCount > 0 && checkedCount < values.length
})

const selectedOptions = computed(() => {
    const opts = []
    if (showStatusBar.value) opts.push('Status Bar')
    if (showActivityBar.value) opts.push('Activity Bar')
    if (showPanel.value) opts.push('Panel')
    return opts
})

const unselectOption = (label: string) => {
    if (label === 'Status Bar') {
        showStatusBar.value = false
    } else if (label === 'Activity Bar') {
        showActivityBar.value = false
    } else if (label === 'Panel') {
        showPanel.value = false
    }
}
</script>

<template>
    <DropdownMenu v-model:open="isOpen">
        <div
            class="flex justify-end h-10 w-52 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
            <DropdownMenuTrigger as-child>
                <ChevronUp class="transition-transform duration-200 ease-in-out" :class="{ 'rotate-180': isOpen }" />
            </DropdownMenuTrigger>
        </div>
        <DropdownMenuContent class="w-56">
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div class="p-2 hover:bg-[#D6E1FE]">
                <label class="flex items-center space-x-2">
                    <Checkbox v-model="allSelected" :indeterminate="indeterminate" />
                    <span>Select All</span>
                </label>
            </div>
            <DropdownMenuSeparator />
            <div class="p-2 hover:bg-[#D6E1FE]">
                <label class="flex items-center space-x-2">
                    <Checkbox v-model="showStatusBar" />
                    <span>Status Bar</span>
                </label>
            </div>
            <div class="p-2 hover:bg-[#D6E1FE]">
                <label class="flex items-center space-x-2">
                    <Checkbox v-model="showActivityBar" />
                    <span>Activity Bar</span>
                </label>
            </div>
            <div class="p-2 hover:bg-[#D6E1FE]">
                <label class="flex items-center space-x-2">
                    <Checkbox v-model="showPanel" />
                    <span>Panel</span>
                </label>
            </div>
        </DropdownMenuContent>
    </DropdownMenu>

    <div class="flex w-52 justify-center">
        <div class="mt-2 flex flex-wrap gap-1">
            <template v-for="label in selectedOptions" :key="label">
                <Badge class="bg-[#214AB5] hover:bg-[#214AB5]">
                    {{ label }}
                    <X class="ml-2 h-4 w-4 cursor-pointer" @click="unselectOption(label)" />
                </Badge>
            </template>
        </div>
        <div class="border-l-2 mt-2">
            <Button class="underline" v-if="selectedOptions.length > 0" variant="link" size="xs" @click="allSelected = false">
                Clear all
            </Button>
        </div>
    </div>
</template>