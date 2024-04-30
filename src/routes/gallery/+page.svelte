<script>
    import MenuBar from "$lib/components/menuBar.svelte"
</script>

<body class="body">
    <header>
        <MenuBar/>
    </header>
    <main class="main">
        <div class="left">
            <div class="left1">
                <img class="leftImage" width="500" height="425"src="https://d2zdpiztbgorvt.cloudfront.net/region1/us/1140564/inspiration/8c6a1aa7de5c40f9b8a0ce533f4a88-mandos-mobile-wash-inspiration-61f0efd442764076b6d61e3e4de962-booksy.jpeg?">
            </div>
        </div>
        <div class="right">
            <div class="rightTop">
                <div>
                    <img class="rightTop1" width="200"src="https://d2zdpiztbgorvt.cloudfront.net/region1/us/1140564/inspiration/d86e7d4617f3444cbf433309a78831-mandos-mobile-wash-inspiration-379c95387e11468d8af4800fd13647-booksy.jpeg?size=360x360">
                </div>
                <div>
                    <img class="rightTop2" width="200" src="https://d2zdpiztbgorvt.cloudfront.net/region1/us/1140564/inspiration/8fdaedc461ea41a798ccb86434a154-mandos-mobile-wash-inspiration-d9a4e251ca224b89b1211667c57768-booksy.jpeg?size=360x360">
                </div>
            </div>
        
            <div class="rightBottom">
                <div>
                    <img class="rightBottom1" width="200"src="https://d2zdpiztbgorvt.cloudfront.net/region1/us/1140564/inspiration/fc500aac0b94422182c1a394a00322-mandos-mobile-wash-inspiration-1599e8964226416ba89b13618b2639-booksy.jpeg?size=360x360">
                </div>
            </div>
        </div>
            
    </main>
</body>




<style>
    .headerImage{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
}
.body{
    background:rgba(3, 3, 25, 0.885);
    height:100%;
}
.main{
    display:grid;
    grid-template-columns: 1fr 1fr;
}
.rightTop{
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom:1rem
}
.rightTop1{
    border-radius: 15px;
    margin-top: 4rem;
    margin-left:2rem
}
.rightTop2{
    border-radius: 15px;
    margin-top: 4rem;
}
.left1{
    margin-top:4rem;
    margin-left:6rem;
    border-radius: 10px;
}
.leftImage{
    border-radius: 15px;
}
.rightBottom1{
    border-radius: 15px;
    margin-left: 2rem;

}
</style>