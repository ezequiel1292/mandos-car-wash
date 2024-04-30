<!-- +page.svelte -->

<script>
    import { onMount } from 'svelte';
    import MenuBar from "$lib/components/menuBar.svelte"
    import QuoteCard from "$lib/components/quoteCard.svelte"
  
    onMount(() => {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    });
  </script>
  
<div class="body">
    <div class="header">
        <MenuBar/>
    </div>
    <div class="main">
        <div class="quoteCard">
           <div class="basic">Basic Interior and Exterior Wash------Starting at $45</div> <br>
           <div class="mini">Mini detail------Starting at $65 </div> <br>
           <div class="bio">Bio-Hazard------Starting at $150</div>
        </div>
        <div class="calendly-inline-widget"
        data-url="https://calendly.com/ez1292-perez/car-wash?hide_event_type_details=1&hide_gdpr_banner=1"
        style="min-width: 320px; height: 700px;">
        </div>
    </div>
   
</div>

<style>
  .body{
    background:rgba(3, 3, 25, 0.885);
    height:100%;
}
.main{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.basic{
  color:white;
  font-size: x-large;
  font-weight: 500;
  margin-bottom: 4rem;
  display:flex;
  justify-content: center;
  align-items: center;
}
.mini{
  color:white;
  font-size: x-large;
  font-weight: 500;
  margin-bottom: 4rem;
  display:flex;
  justify-content: center;
  align-items: center;
}
.bio{
  color:white;
  font-size: x-large;
  font-weight: 500;
  margin-bottom: 4rem;
  display:flex;
  justify-content: center;
  align-items: center;
}
.quoteCard{
  margin-top: 16rem;
  margin-left: 10rem;
}
</style>
