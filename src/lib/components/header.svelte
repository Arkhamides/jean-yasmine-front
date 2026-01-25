<script lang="ts">
  import "iconify-icon";
  let sidebarOpen = false;
</script>

<header class="fixed top-0 left-0 w-full border-black/10 bg-white z-20">
  <div
    class="border-b border-t-8 border-t-[#3A0D0D] max-w-screen-2xl mx-auto flex items-center justify-between py-6 px-8"
  >
    <a
      href="/"
      class="text-2xl tracking-[0.12em] text-[#2f2f26] uppercase"
    >
      Jean Yasmine
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
  <!-- Overlay -->
  <div
    class="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
    on:click={() => (sidebarOpen = false)}
  ></div>

  <!-- Sidebar -->
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
      <a href="/about" class="hover:opacity-60 transition-opacity"> About </a>
      <a href="/contact" class="hover:opacity-60 transition-opacity">
        Contact
      </a>
    </nav>
  </aside>
{/if}
