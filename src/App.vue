<template>
    <div>
        <app-navbar></app-navbar>

        <div class="container">
            <app-header></app-header>
            <FindClosers></FindClosers>
            <ManageClosers></ManageClosers>
            <HowClosers></HowClosers>
            <HowItWorks></HowItWorks>
            <JoinClosers></JoinClosers>
        </div>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar";
import AppHeader from "@/components/AppHeader";
import FindClosers from "@/components/FindClosers";
import ManageClosers from "@/components/ManageClosers";
import HowClosers from "@/components/HowClosers";
import HowItWorks from "@/components/HowItWorks";
import JoinClosers from "@/components/JoinClosers";
import AppFooter from "@/components/AppFooter";
export default {
    components: {
        AppNavbar,
        AppHeader,
        FindClosers,
        ManageClosers,
        HowClosers,
        HowItWorks,
        JoinClosers,
        AppFooter
    }
};
</script>

<style lang="scss">
html,
body {
    font-family: "Montserrat", sans-serif;
    color: #303030;
}
</style>
