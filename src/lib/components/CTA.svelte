<script lang="ts">
    import { onMount } from "svelte";

    const images = ["/projects/architecture.jpg", "/projects/beaufort.jpg"];
    let visible = [false, false, false];
    let textBlock: HTMLParagraphElement | null = null;

    // Scroll Triggered Fade In
    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    visible.forEach((_, i) => {
                        setTimeout(() => {
                            visible[i] = true;
                        }, i * 700);
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.3 },
        );

        if (textBlock) observer.observe(textBlock);

        return () => {
            observer.disconnect();
        };
    });
</script>

<section class="mx-auto py-32">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <p bind:this={textBlock} class="text-xl leading-relaxed text-black/80">
            <span
                class="
          transition-opacity duration-700 font-medium
          {visible[0] ? 'opacity-100' : 'opacity-0'}
        "
            >
                Architecture is a dialogue between time and place
            </span>

            <br /><br />

            <span
                class="
          transition-opacity duration-[1500ms] font-medium
          {visible[1] ? 'opacity-100' : 'opacity-0'}
        "
            >
                To honor heritage is to acknowledge the layers that shaped us —
                and to build with a sense of continuity, not nostalgia
            </span>

            <br /><br />

            <span
                class="
          transition-opacity duration-[1500ms] font-medium
          {visible[2] ? 'opacity-100' : 'opacity-0'}
        "
            >
                Every project becomes a bridge between what was, and what can
                be.
            </span>
        </p>

        <img
            src={images[0]}
            alt="Heritage project"
            class="w-full h-auto object-cover"
        />
    </div>
</section>
