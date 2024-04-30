<script>
    export let data
    const quote=data.quote
    import AdminHeader from "$lib/components/adminHeader.svelte"
</script>




<div class="body">
    
    <header class="header">
        <AdminHeader/>
    </header>

    {#each quote as quote}
        <div class="quotes">
            {quote.name}<br>
            {quote.phone_number}<br>
            {quote.wash_type}<br>
            {quote.car_type}<br>
            <div class="additional">Additional services requested:</div> 
            -{quote.request_box}
        </div>
    {/each}
</div>


<style>
    .body{
        background:rgba(3, 3, 25, 0.885);
        height: 100rem;
    }
    .header{
        margin-bottom: 4rem;
    }
    .quotes{
        margin-left: 4rem;
        margin-bottom: 2rem;
        color:white;
        font-weight: 400;
        font-size: larger;
        background-color: rgb(69, 76, 98);;
        width: 28rem;
        padding: 1rem;
        border-radius: 15px;
    }
    .additional{
        font-size: large;
        font-weight: 700;
        margin-top: 1rem;
    }
</style>