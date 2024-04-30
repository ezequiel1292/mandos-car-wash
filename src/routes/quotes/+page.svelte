<script>
    import MenuBar from"$lib/components/menuBar.svelte"
export let form
export let data
const quote=data.quote
console.log(quote)

</script>

{form}

<body class="body">
    <header>
        <MenuBar/>
    </header>
    <div>
        <div class="keyNote">
            *price subject to change on condition of car, pet hair, stains
        </div>
        <form class="quoteCard"method="post" label="quote">
            <input class="name "name="name" placeholder="Name">
            <input class="phoneNumber"  name="phone_number"placeholder="Phone Number"> <br>
            <select class="detailType"name="wash_type" placeholder="Detail Type">
                <option name="basic_wash" value="basic wash">Basic Wash---(starting at $45)</option>
                <option name="mini_detail" value="mini detail">Mini Detail---(starting at $65)</option>
                <option name="bio_hazard" value="bio hazard">Bio Hazard Cleaning---(starting at $150)</option>
            </select>
            <select class="vehicleType"name="car_type" placeholder="Vehicle Type">
                <option name="vehicle_type" value="2 door car">2 Door Car</option>
                <option name="vehicle_type" value="4 door car">4 Door Car</option>
                <option name="vehicle_type" value="small Suv & Truck">Small SUV and Truck</option>
                <option name="vehicle_type" value="large Suv & Truck">Large SUV and Truck</option>
            </select> <br>
            <input class="requestBox" name="request_box" placeholder="Please type any special request or questions you may have about a service."> <br>
            <button class="quoteButton">Submit</button>
        </form>
    </div>
    </body>


<style>
    .quoteCard{
       margin-left: 30rem;
    }
    .requestBox{
        width: 32rem ;
        height: 24rem;
        font-size:15px;
        border-radius: 15px;
    }
   
    .body{
    background:rgba(3, 3, 25, 0.885);
    height:100%;
    }
    .name{
        margin-top: 2rem;
        margin-bottom: 2rem;
        margin-right: 4rem;
        height: 1.75rem;
        width: 13.5rem;
    }
    .vehicleType{
        height: 2rem;
        width: 14rem;
        margin-bottom: 2rem;
    }
    .keyNote{
        color:white;
        margin-left:30rem ;
        margin-top: 2rem;
    }
    .phoneNumber {
        height: 2rem;
        width: 13.5rem;
        margin-right: 4rem;
    }
    .detailType{
        height: 2rem;
        width: 14rem;
        margin-right: 4rem;


    }
    .quoteButton{
        width: 28em;
        height: 2rem;
        margin-left: 5rem;
        margin-top: 1rem;
        border-radius: 8px;
        margin-bottom: 2rem;
        background-color: rgb(180, 184, 198);
    }
    .quoteButton:hover{
    transform: scale(1.1);
}
</style>