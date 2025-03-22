<script setup>
    import logo1 from "@/assets/Logo1.png"
</script>


<template>
    <div class="w-login  bg-logreg2 rounded-lg h-login mb-80 ">
        <div class="banner bg-logreg3 h-20 flex items-center border rounded border-x-slate-800 justify-center">
               <img :src="logo1" alt="">
        </div>
        <div class="flex flex-col items-start p-5 mt-5">
            <div>
                <h1 class="font-kontol font-700 text-[24px]">Login</h1>
            </div>
            <div class="mt-8">
                <form>
                    <div class="flex flex-col gap-2">
                        <label for="" class="font-kontol font-700 text-[16px]">Email or Username</label>
                        <input type="text" class="w-input rounded pl-2 pb-1 h-input bg-input" placeholder="Input your email or username">
                    </div>
                    <div class="flex flex-col gap-2 mt-3">
                        <label for="" class="font-kontol font-700 text-[16px]">Password</label>
                        <input type="text" class="w-input rounded pl-2 pb-1 h-input bg-input" placeholder="Input your email or username">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<style>


</style>