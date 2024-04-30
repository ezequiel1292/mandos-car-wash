<script>
    import ServiceCard from "$lib/components/serviceCard.svelte";
    import Title from "$lib/components/title.svelte";
    import MenuBar from"$lib/components/menuBar.svelte"
</script>
<body class="body">
<header class="header">
  <MenuBar/>
</header>


  
    <div class="main">
        <div class="service1">
            <div>
                <Title title="Basic Inteior and Exterior Wash"/>
            </div>
            <div>
                <ServiceCard type="2 Door Car" price="$45.00+" />
                <ServiceCard type="4 Door Car" price="$55.00+"/>
                <ServiceCard type="Small SUV and Truck" price="$65.00+"/>
                <ServiceCard type="Large SUV and Truck" price="$80.00+"/>
                <button class="button"><a href="/schedule">Book</a></button>
            </div>
        </div>
        <div class="service2">
            <div>
                <Title title="Mini Detailing"/>
            </div>
            <div>
                <ServiceCard type="2 Door Car" price="$65.00+"/>
                <ServiceCard type="4 Door Car" price="$75.00+"/>
                <ServiceCard type="Small SUV and Truck" price="$85.00+"/>
                <ServiceCard type="Large SUV and Truck" price="$100.00+"/>
                <button class="button"><a href="/schedule">Book</a></button>
            </div>
        </div>
        <div class="service3">
            <div>
                <Title title="Bio Hazard Cleaing"/>
            </div>
            <div>
                <div class="service3Title">
                    <ServiceCard type="All Vehicles" price="$150.00+"/>
                </div>
                
                <button class="button"><a href="/schedule">Book</a></button>
            </div>
        </div>
    </div>
        

    
    
</body>

<style>
.body{
    background:rgba(3, 3, 25, 0.885);
    height:100%;
}
.menu {
    color:white;
    margin-bottom: 2rem;
    margin-top: -6rem;
}


.main{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding:2rem;
    margin-top: 4rem;
}

.service1{
    margin-right: 2rem;
    border-radius: 15px;
    background-color: rgb(69, 76, 98);
    
}
.service2{
    margin-right: 2rem;
    border-radius: 15px;
    background-color: rgb(69, 76, 98);
}
.service3{
    border-radius: 15px;
    background-color: rgb(69, 76, 98);
    
}
.header{
    z-index: -1;
}
.button{
    background-color:rgb(54, 161, 197) ;
    border-radius: 5px;
    margin-left: 7rem;
    width: 16rem;
    margin-bottom: 2rem;
   }
   a {
        text-decoration: none;
        color:white;
    }
    .service3Title{
        margin-bottom: 7.5rem;
    }
</style>