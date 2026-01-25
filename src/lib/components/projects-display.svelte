<script lang="ts">
    const images = ["/projects/architecture.jpg", "/projects/beaufort.jpg"];

    const description = [
        { region: "World", description: "Clean architecture picture" },
        {
            region: "Nabatieh Governorate, Southern Lebanon",
            description: "Belfort Castle is a crusader fortress",
        },
    ];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {#each images as img, index}
        <div class="relative group overflow-hidden">
            <img
                src={img}
                alt={img}
                class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />

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
