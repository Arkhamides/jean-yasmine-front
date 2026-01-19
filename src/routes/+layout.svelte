<script lang="ts">
  import { page } from "$app/stores";
  import { initializeStores } from "@skeletonlabs/skeleton";
  import "../app.css";

  import Header from "$lib/components/header.svelte";

  const sidebarRoutes = ["/home"];
  initializeStores();
</script>

<div class="min-h-screen flex flex-col">
  <div class="flex-1">
    <Header/>
    <slot />
  </div>

  {#if $page.url.pathname === "/"}
    <footer class="mt-auto shadow bg-black">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center">
        <span class="text-sm text-white sm:text-center">
          © 2025 <a href="/" class="hover:underline">Jean Yasmine™</a>  All Rights Reserved.
        </span>
      </div>
    </footer>
  {/if}
</div>

