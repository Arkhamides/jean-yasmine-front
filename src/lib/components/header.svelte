<script lang="ts">
  import "iconify-icon";

  let sidebarOpen = false;
</script>

<header class="w-full border-b border-black/10 bg-white z-20 fixed">
  <div
    class="max-w-screen-xl mx-auto flex items-center justify-between py-6 px-4"
  >
    <a href="/" class="text-xl tracking-widest font-semibold">
      ERA HERITAGE
    </a>

    <nav class="flex items-center gap-8 text-sm">
      <a
        href="/projects"
        class="font-medium hover:opacity-60 transition-opacity"
      >
        Projects
      </a>

      <button
        on:click={() => (sidebarOpen = true)}
        class="text-2xl leading-none font-medium hover:opacity-60 transition-opacity"
      >
        +
      </button>
    </nav>
  </div>
</header>

{#if sidebarOpen}
  <div
    class="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
    on:click={() => (sidebarOpen = false)}
  ></div>

  <aside
    class="fixed right-0 top-0 h-full w-64 bg-white shadow-xl border-l border-black/10 p-6 flex flex-col z-30"
  >
    <button
      class="self-end text-2xl font-light mb-6 hover:opacity-60 transition-opacity"
      on:click={() => (sidebarOpen = false)}
    >
      ×
    </button>

    <nav class="flex flex-col gap-4 text-lg">
      <a href="/projects" class="hover:opacity-60 transition-opacity">
        Projects
      </a>
      <a href="/about" class="hover:opacity-60 transition-opacity">About</a>
      <a href="/contact" class="hover:opacity-60 transition-opacity">
        Contact
      </a>
    </nav>
  </aside>
{/if}
