<script setup>
import NavbarHome from './NavbarHome.vue';
import Sidebar from './SidebarTop.vue';
import SidebarTop from './SidebarTop.vue';
import SidebarBottom from './SidebarBottom.vue';
import Player from './Player.vue';
</script>


<template>
    <div>
        <NavbarHome/>
        <div class="flex">
            <div class="fixed">
                <div class="border border-sidebar w-[291px]  bg-sidebar text-white pt-6 pl-5 pr-7">
                    <SidebarTop/>
                </div>
                <div class="border border-sidebar w-[291px] h-[1085px] bg-sidebar text-white pt-6 pl-5 pr-7">
                    <SidebarBottom/>
                </div>
            </div>
            <div class="ml-[291px] p-7 bg-[#363947] w-[100%]">
                <slot></slot>
            </div>
            <Player/>
        </div>
    </div>
</template>