<script setup>
import silang from "@/assets/silang.png"
import kamera from "@/assets/kamera.png"

</script>

<template>
    <div class="w-[724px] mb-[25rem] h-[485px] top-[122px] left-[358px] bg-[#252836] rounded-lg">
        <div class="p-6 flex justify-between items-center bg-[#1F1D2B] rounded-t-lg">
            <h1 class="font-kontol font-900 text-[24px]">Create Playlist</h1>
            <div>
                <img :src="silang" alt="">
            </div>
        </div>
        <form action="">
        <div class="p-10 flex gap-14 justify-center">
                <div class="flex flex-col items-start gap-5">
                    <h2 class="font-kontol font-700 text-[16px]">Cover Photo</h2>
                    <div class="flex flex-col items-center pt-20 bg-[#3C4156] w-[229px] h-[229px]">
                        <img class="w-[28px] h-[28px]" :src="kamera" alt="">
                        <p class="font-kontol font-400 text-[#92929D] text-[14px]">Add Photo</p>
                    </div>
                </div>
                <div>
                    <div class="flex flex-col gap-4">
                        <h1 class="font-kontol font-700 text-[16px]">Playlist Title</h1>
                        <input type="text" class="w-input rounded outline-none pl-2 pb-1 h-input bg-input" placeholder="Input Title">
                    </div>
                    <div class="flex flex-col gap-4 mt-3">
                        <h1 class="font-kontol font-700 text-[16px]">Description</h1>
                        <Textarea type="text" class="w-[396px] h-[143px] rounded outline-none  bg-input"></Textarea>
                    </div>
                    <div class="flex justify-end mt-4">
                        <div class="flex gap-5">
                            <div>
                                <button class="bg-[#92929D] p-3 rounded-full w-[142px]">Cancel</button>
                            </div>
                            <div>
                                <button class="bg-gradient-to-r from-right to-left p-3 rounded-full w-[142px]">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>