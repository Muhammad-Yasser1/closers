<template>
    <section class="row">
        <div class="col-md-6 card border-0">
            <div class="card-body mt-5">
                <h1 class="card-title">Manage Your Closers With Our All-In-One Platform</h1>
                <p
                    class="card-text"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sit reiciendis dolores, quod nam amet temporibus dolorum molestias soluta harum tempora non ipsum? Deserunt delectus sed, possimus officia facilis commodi.</p>
                <p
                    class="card-text"
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, molestias?</p>
                <div class="card-footer">
                    <button class="btn card-link btn-orange px-4">Request to join</button>
                    <button class="btn card-link btn-black px-4">Post an opportunity</button>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="image-container wow fadeInRight" data-wow-duration="1.5s">
                <img src="../assets/images/02.png" class="img-fluid" alt="a white dashboard">
            </div>
        </div>
    </section>
</template>


<script>
export default {};
</script>

<style lang='scss' scoped>
section.row {
    padding-top: 100px;
    padding-bottom: 100px;
    .card-body {
        .card-title {
            font-weight: 500 !important;
            font-size: 30px;
            color: #777;
            line-height: 1.7;
        }
        .card-text {
            font-size: 16px;
            line-height: 2;
            color: #777;
        }
        .card-footer {
            background: transparent;
            border-top: 0;
            .card-link {
                padding-top: 10px;
                padding-bottom: 12px;
                border-radius: 25px;
                font-weight: 600;
                color: #fff;
                font-size: 14px;
                transition: all 0.3s;
                position: relative;
                top: 0;
                &:hover {
                    top: -3px;
                }
                &.btn-orange {
                    background: #e9ac50;
                    letter-spacing: 0.5px;
                    &:hover {
                        box-shadow: 0 8px 40px #e9ac50;
                    }
                }
            }
        }
    }
}
</style>