<script>
    import {getContext} from 'svelte';
    import Sidebar from './Sidebar.svelte';
    import Header from './Header.svelte';
    import Body from './Body.svelte';
    import NowIndicator from './NowIndicator.svelte';

    let {nowIndicator, theme} = getContext('state');
</script>

<div class="{$theme.container}">
    <Sidebar/>
    <div class="{$theme.main}">
        <Header/>
        <Body/>
        {#if $nowIndicator}
            <NowIndicator/>
        {/if}
    </div>
</div>
