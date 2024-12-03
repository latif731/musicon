<script setup></script>

<template>
  <div>
    <div class="flex flex-col gap-3">
      <div
        class="flex items-center gap-5 bg-gradient-to-r from-right to-left p-5 rounded-[8px] cursor-pointer"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM2 16V2H8V16H2ZM16 16H10V9H16V16ZM16 7H10V2H16V7Z"
            fill="white"
          />
        </svg>
        <h1 class="font-kontol font-[700] text-[16px]">Home</h1>
      </div>
      <div class="flex items-center gap-5 p-4 rounded-[8px] cursor-pointer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 6C2 6 3.5 4 7 4C10.5 4 12 6 12 6V20C12 20 10.5 19 7 19C3.5 19 2 20 2 20V6Z"
            stroke="#92929D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 6C12 6 13.5 4 17 4C20.5 4 22 6 22 6V20C22 20 20.5 19 17 19C13.5 19 12 20 12 20V6Z"
            stroke="#92929D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h1 class="font-kontol font-[700] text-[16px] text-sidebar">Browse</h1>
      </div>
      <div class="flex items-center gap-5 p-4 rounded-[8px] cursor-pointer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 16.493C13 18.427 14.573 20 16.507 20C18.441 20 20.014 18.427 20.014 16.493C20.014 16.316 19.987 16.146 19.961 15.976H20V6H22V4H19C18.7348 4 18.4804 4.10536 18.2929 4.29289C18.1054 4.48043 18 4.73478 18 5V13.333C17.5344 13.1077 17.0243 12.9894 16.507 12.987C15.5773 12.9878 14.6859 13.3574 14.0284 14.0147C13.3709 14.672 13.0011 15.5633 13 16.493ZM2 5H16V7H2V5Z"
            fill="#92929D"
          />
          <path
            d="M2 9H16V11H2V9ZM2 13H11V15H2V13ZM2 17H11V19H2V17Z"
            fill="#92929D"
          />
        </svg>

        <h1 class="font-kontol font-[700] text-[16px] text-sidebar">
          Playlist
        </h1>
      </div>
    </div>
  </div>
</template>
