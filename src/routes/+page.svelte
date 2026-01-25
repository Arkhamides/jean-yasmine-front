<script lang="ts">
  import { onMount } from "svelte";

  import Carrousel from "$lib/components/carrousel.svelte";
  import ContactUs from "$lib/components/contact-us.svelte";
  import About from "$lib/components/about.svelte";
  import Socials from "$lib/components/socials.svelte";
  import CTA from "$lib/components/CTA.svelte";
</script>

<svelte:head>
  <title>Jean Yasmine</title>
</svelte:head>

<Carrousel />

<!-- <CTA /> -->

<About />

<ContactUs />

<!-- <Socials /> -->
