<template>
    <footer class="w-100">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <a href="#">
                        <img src="../assets/images/horizontal.png" alt="logo">
                    </a>
                </div>
            </div>
            <div class="row my-5">
                <div class="col-md-2 col-6">
                    <ul>
                        <li>How it works</li>
                        <li>
                            <a href="#">Closers</a>
                        </li>
                        <li>
                            <a href="#">Companies</a>
                        </li>
                        <li>
                            <a href="#">Marketplace</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 col-6">
                    <ul>
                        <li>About Us</li>
                        <li>
                            <a href="#">Company</a>
                        </li>
                        <li>
                            <a href="#">Contact us</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 col-6">
                    <ul>
                        <li>News</li>
                        <li>
                            <a href="#">News</a>
                        </li>
                        <li>
                            <a href="#">Press</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 col-6">
                    <ul>
                        <li>Legal</li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 col-6">
                    <ul>
                        <li>Follow us</li>
                        <li>
                            <a href="#">
                                <img src="../assets/images/Fb.svg" alt="facebook"> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../assets/images/Linkedin.svg" alt="linked in"> LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../assets/images/Angelist.svg" alt="angelist"> Angelist
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 col-6">
                    <ul>
                        <li>Contact</li>
                        <li>
                            <a href="#">info@closers.com</a>
                        </li>
                        <li>
                            <a href="#">
                                Vancouver, BC
                                <br>Canada
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row text-secondary mt-5">
                <div class="col-6">English (United States)</div>
                <div class="col-6 text-right">@ closers.com 2018</div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
footer {
    padding-top: 50px;
    margin-top: 50px;
    padding-bottom: 50px;
    background: #f8f9fa;
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            margin-top: 10px;
            font-weight: 500;
            line-height: 2;
            color: #777;
            a {
                color: #777;
            }
            &:first-child {
                color: #444;
                font-weight: 700;
                margin-bottom: 30px;
            }
        }
    }
}
</style>