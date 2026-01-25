<script>
    import Socials from "$lib/components/socials.svelte";

    const email = "hello@example.com";
    const phone = "+961 00 000 000";
</script>

<section class="mx-auto max-w-7xl py-6 sm:px-6 sm:py-12 lg:px-8">
    <div
        class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
    >
        <div class="container px-6 py-12 mx-auto" style="max-width: 800px;">
            <h2
                class="text-[1.6rem] font-medium mb-6 text-[#e5e2dc] tracking-tight text-center"
            >
                Get In touch
            </h2>

            <div class="grid gap-5">
                <a
                    href="mailto:{email}"
                    class="flex flex-col pb-3 border-b border-gray-700"
                >
                    <span
                        class="text-xs uppercase tracking-wider text-gray-400"
                    >
                        Email
                    </span>
                    <span
                        class="text-lg text-gray-100 mt-0.5 transition-colors duration-200 hover:text-gray-300"
                    >
                        {email}
                    </span>
                </a>

                <a
                    href="tel:{phone}"
                    class="flex flex-col pb-3 border-b border-gray-700"
                >
                    <span
                        class="text-xs uppercase tracking-wider text-gray-400"
                    >
                        Phone
                    </span>
                    <span
                        class="text-lg text-gray-100 mt-0.5 transition-colors duration-200 hover:text-gray-300"
                    >
                        {phone}
                    </span>
                </a>
            </div>
            <div class="mt-4">
                <Socials />
            </div>
        </div>
    </div>
</section>
