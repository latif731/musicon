<script setup>
    import logo from "@/assets/Logo.png";
    import playstore from "@/assets/googleplay.png"
    import applestore from "@/assets/appstore.png"
    import twitter from "@/assets/icons/twitter.png"
    import instagram from "@/assets/icons/instagram.png"
    import facebook from "@/assets/icons/facebook.png"
</script>
<template>
    <div
    class="bg-[#252836] absolute w-[1519px] top-[0] mt-[800px] p-16"
    >
        <div>
            <img :src="logo" alt="" />
        </div>
        <div
        class="flex p-4 justify-between"
        >
            <div class="flex flex-col gap-16">
                <div
                class="w-[257px]"
                >
                    <h3
                    class="text-white font-kontol font-[400] text-[18px] leading-[24px] tracking-[0.5%]"
                    >Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
                </div>
                <div>
                    <h1 class="text-[#92929D] font-kontol font-[700] text-[20px]">
                        AVAILABLE ON 
                    </h1>
                    <div class="flex gap-3 mt-2">
                        <img :src="playstore" alt="">
                        <img :src="applestore" alt="">
                    </div>
                </div>
            </div>
            <div
            class="flex flex-col gap-5"
            >
                    <h1 class="text-[#92929D] font-kontol font-[700] text-[20px]">
                        COMPANY 
                    </h1>
                    <h1
                    class="text-white font-kontol font-[700] text-[18px]"
                    >About</h1>
                    <h1 class="text-white font-kontol font-[700] text-[18px]">Career</h1>
            </div>
            <div
            class="flex flex-col gap-5"
            >
                <h1 class="text-[#92929D] font-kontol font-[700] text-[20px]">
                        COMMUNITY 
                </h1>
                <h1
                    class="text-white font-kontol font-[700] text-[18px]"
                    >Ads</h1>
                    <h1 class="text-white font-kontol font-[700] text-[18px]">For Artist</h1>
                    <h1 class="text-white font-kontol font-[700] text-[18px]">Developers</h1>
                    <h1 class="text-white font-kontol font-[700] text-[18px]">Vendors</h1>
            </div>
            <div>
                <h1 class="text-[#92929D] font-kontol font-[700] text-[20px]">
                    FOLLOW US ON SOCIAL MEDIA 
                    </h1>
                <div
                class="flex gap-10 mt-10"
                >
                <img :src="twitter" alt="" class="w-[20px] h-[20px]">
                <img :src="facebook" alt="" class="w-[25px] h-[25px]">
                <img :src="instagram" alt="" class="w-[25px] h-[25px]">
                </div>
            </div>
        </div>
    </div>
</template>