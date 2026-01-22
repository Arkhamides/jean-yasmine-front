<script lang="ts">
  import { onMount } from "svelte";

  // List all your project images
  const images = ["/projects/architecture.jpg", "/projects/beaufort.jpg"];

  const description = [
    { region: "World", description: "Clean architecture picture" },
    {
      region: "Nabatieh Governorate, Southern Lebanon",
      description: "Belfort Castle is a crusader fortress  ",
    },
  ];

  let current = 0;

  onMount(() => {
    const interval = setInterval(() => {
      current = (current + 1) % images.length;
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <title>ERA Architecture</title>
</svelte:head>

<div
  class="relative w-full h-[90vh] overflow-hidden bg-black opacity-0 animate-fadeIn"
>
  {#each images as img, i}
    <img
      src={img}
      alt="Project image"
      class="
        absolute inset-0 w-full h-full object-cover transition-opacity duration-700
        {i === current ? 'opacity-100' : 'opacity-0'}
      "
    />
  {/each}
</div>

<section class="max-w-screen-xl mx-auto px-4 pt-32 pb-20">
  <h1
    class="text-6xl md:text-8xl font-light tracking-tight leading-[1.05] mb-20"
  >
    The Importance of Heritage
  </h1>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <img
      src={images[0]}
      alt="Heritage project"
      class="w-full h-auto object-cover"
    />

    <p class="text-xl leading-relaxed text-black/80">
      Architecture is a dialogue between time and place.
      <br /><br />
      To honor heritage is to acknowledge the layers that shaped us — and to build
      with a sense of continuity, not nostalgia.
      <br /><br />
      Every project becomes a bridge between what was, and what can be.
    </p>
  </div>
</section>

<section class="max-w-screen-xl mx-auto px-4 py-24">
  <!-- Section title -->
  <div class="mb-16">
    <h2 class="text-2xl md:text-3xl font-light tracking-wide mb-2">Projects</h2>
    <div class="h-[2px] w-full bg-black"></div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {#each images as img, index}
      <div class="relative group overflow-hidden">
        <!-- Image -->
        <img
          src={img}
          alt={img}
          class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <div class="text-white text-left space-y-1 tracking-wide">
            <div class="text-base">
              <span class="font-semibold">Region:</span>
              {description[index].region}
            </div>
            <div class="text-base">
              <span class="font-semibold">Description:</span>
              {description[index].description}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
