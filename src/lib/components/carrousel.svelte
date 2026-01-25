<script lang="ts">

    const projects = [
        {
            image: "/projects/architecture.jpg",
            title: "The World",
            description:
                "A restrained architectural intervention exploring mass, void, and material honesty.",
        },
        {
            image: "/projects/beaufort.jpg",
            title: "Chateau Beaufort",
            description:
                "A coastal residence balancing structural clarity with atmospheric softness.",
        },
    ];

    let current = 0;

    function next() {
        current = (current + 1) % projects.length;
    }

    function prev() {
        current = (current - 1 + projects.length) % projects.length;
    }
</script>

<!-- IMAGE SECTION -->
<div class="relative w-full h-[55vh] overflow-hidden bg-black">
    {#each projects as p, i}
        <img
            src={p.image}
            alt="Project image"
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700
            {i === current ? 'opacity-100' : 'opacity-0'}"
        />
    {/each}
</div>

<!-- DESCRIPTION + ARROWS SECTION -->
<div class="mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
    <!-- LEFT: DESCRIPTION -->
    <div class="z-10 bg-white -mt-16 pl-8 md:pl-16 p-12">
        <div class="flex items-start gap-6">
            <!-- Number -->
            <span
                class="text-6xl md:text-7xl font-bold tracking-tight leading-none"
                style="color:#3A0D0D;"
            >
                {String(current + 1).padStart(2, "0")}
            </span>

            <!-- Title + Description + Button -->
            <div class="flex flex-col gap-4">
                <h2
                    class="text-3xl md:text-4xl font-semibold leading-tight text-black"
                >
                    {projects[current].title}
                </h2>

                <p class="text-lg font-medium text-black/90 leading-relaxed">
                    {projects[current].description}
                </p>

                <button
                    class="mt-2 inline-block px-3 py-1.5 font-medium tracking-wide
                       rounded-full bg-[#3A0D0D] text-white
                       hover:opacity-80 transition-opacity w-64"
                >
                    Learn more
                </button>
            </div>
        </div>
    </div>

    <!-- RIGHT: ARROWS -->
    <div class="flex items-center justify-left gap-6 pr-8 md:pr-16">
        <!-- Prev -->
        <button
            on:click={prev}
            class="text-3xl font-light transition-opacity select-none
               {current === 0
                ? 'opacity-20 cursor-not-allowed'
                : 'hover:opacity-60'}"
            disabled={current === 0}
        >
            ←
        </button>

        <!-- Pagination -->
        <span class="text-lg font-medium text-black/70 tracking-wide">
            {current + 1}/{projects.length}
        </span>

        <!-- Next -->
        <button
            on:click={next}
            class="text-3xl font-light transition-opacity select-none
               {current === projects.length - 1
                ? 'opacity-20 cursor-not-allowed'
                : 'hover:opacity-60'}"
            disabled={current === projects.length - 1}
        >
            →
        </button>
    </div>
</div>
