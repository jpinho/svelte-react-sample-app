<script>
  // React-Svelte Adapters
  import ReactAdapter from "./utils/ReactAdapter.svelte";
  import ReactSlot from "./utils/ReactSlot.svelte";

  // react mui components
  import Button from "@material-ui/core/Button";
  import Divider from "@material-ui/core/Divider";
  import Badge from "@material-ui/core/Badge";
  import MyTable from "./components/react/MyTable";
  import Badges from "./components/react/Badges";

  let badgeContent = 5;

  onMount(() => {
    console.image = function (url, size = 100) {
      var image = new Image();
      image.onload = function () {
        var style = [
          "font-size: 1px;",
          "padding: " +
            (this.height / 100) * size +
            "px " +
            (this.width / 100) * size +
            "px;",
          "background: url(" + url + ") no-repeat;",
          "background-size: contain;",
        ].join(" ");
        console.warn("%c ", style);
        console.warn(
          `
This is part of your browser intended for developers. If someone told you to copy-and-paste something here, don't do it! 
It could allow them to take over your Epilot account, delete all of your Journeys, or do many other harmful things. 
If you don't understand what exactly you are doing here, you should close this window without doing anything.`.trim()
        );
      };
      image.src = url;
    };

    console.image("https://epilot-dev.surge.sh/logo.png", 10);
  });
</script>

<main>
  <h1>React inside Svelte</h1>
  <h2>with React Material UI!</h2>

  <font size="-3">
    <pre><font color="black">0101010</font><font color="#010001">1</font><font color="#09090a">0</font><font color="#311521">1</font><font color="#6e471c">0</font><font color="#748633">1</font><font color="#465f49">0</font><font color="#535a49">1</font><font color="#545854">0</font><font color="#45432f">1</font><font color="#11100d">0</font><font color="#020201">1</font><font color="black">0101010101010101010101</font><br><font color="#151410">0</font><font color="#474330">1</font><font color="#211f19">0</font><font color="#1b1a14">1</font><font color="#080908">0</font><font color="#060605">1</font><font color="#1a1609">0</font><font color="#72443b">1</font><font color="#5c629c">0</font><font color="#f15564">1</font><font color="#f7e523">0</font><font color="#7eda8b">1</font><font color="#919392">0</font><font color="#f0f0f0">1</font><font color="#b2b8b4">0</font><font color="#689691">1</font><font color="#86a7ad">0</font><font color="#56533d">1</font><font color="#090907">0</font><font color="black">101010101010101010101</font><br><font color="#020202">0</font><font color="#242219">1</font><font color="#3e3a29">0</font><font color="#847e59">1</font><font color="#8b835a">0</font><font color="#7b7555">1</font><font color="#928457">0</font><font color="#7a7556">1</font><font color="#706e66">0</font><font color="#ed4354">1</font><font color="#f9cf24">0</font><font color="#8ec864">1</font><font color="#838982">0</font><font color="#747474">1</font><font color="#a4a4a4">0</font><font color="#d6d7d6">1</font><font color="#619577">0</font><font color="#84aee0">1</font><font color="#80794e">0</font><font color="#0c0713">1</font><font color="#0e071e">0</font><font color="#03010a">1</font><font color="black">010101010101010101</font><br><font color="black">010</font><font color="#060706">1</font><font color="#21201e">0</font><font color="#665f3d">1</font><font color="#766545">0</font><font color="#857f55">1</font><font color="#7e7652">0</font><font color="#80343a">1</font><font color="#dd464b">0</font><font color="#957e25">1</font><font color="#789151">0</font><font color="#929693">1</font><font color="#fcfcfc">0</font><font color="white">1</font><font color="#929693">0</font><font color="#74b2c2">1</font><font color="#785fe8">0</font><font color="#9a478b">1</font><font color="#863192">0</font><font color="#1f1142">1</font><font color="black">010101010101010101</font><br><font color="black">0101</font><font color="#030303">0</font><font color="#634d15">1</font><font color="#ba846e">0</font><font color="#707c73">1</font><font color="#bebcb8">0</font><font color="#b7b5b8">1</font><font color="#945267">0</font><font color="#8c2c4a">1</font><font color="#c6c1d2">0</font><font color="#e5dff2">1</font><font color="#efe9ff">0</font><font color="#f6f3ff">1</font><font color="#bbabe2">0</font><font color="#565bb9">1</font><font color="#789ce7">0</font><font color="#c79b67">1</font><font color="#f3654a">0</font><font color="#525b28">1</font><font color="#0a0b0f">0</font><font color="black">10101010</font><font color="#010101">10</font><font color="#070707">1</font><font color="#0c0b0a">0</font><font color="#181818">1</font><font color="#111111">0</font><font color="#010101">1</font><font color="black">01</font><br><font color="black">010</font><font color="#04020b">1</font><font color="#1b103a">0</font><font color="#603285">1</font><font color="#755fa6">0</font><font color="#b499f5">1</font><font color="#b697fc">0</font><font color="#9d79f2">1</font><font color="#8c66e6">0</font><font color="#764ec9">1</font><font color="#5e3daa">0</font><font color="#7340a9">1</font><font color="#804ba5">0</font><font color="#924a8a">1</font><font color="#855ab4">0</font><font color="#adb2b1">1</font><font color="#6b9783">0</font><font color="#5f7a9a">1</font><font color="#8d3e39">0</font><font color="#c1e059">1</font><font color="#3b4d75">0</font><font color="#050405">1</font><font color="black">0</font><font color="#010101">1</font><font color="#020202">0</font><font color="#0a0a0a">1</font><font color="#1b1b1b">0</font><font color="#232323">1</font><font color="#3e3e3e">0</font><font color="#6b6b6b">1</font><font color="#999999">0</font><font color="#b8b8b8">1</font><font color="#787374">0</font><font color="#b7717d">1</font><font color="#c05265">0</font><font color="#611823">1</font><font color="#0f0a0b">0</font><font color="black">1</font><br><font color="black">010</font><font color="#2a126b">1</font><font color="#5d20f8">0</font><font color="#7f4afa">1</font><font color="#5e33d2">0</font><font color="#8a65dd">1</font><font color="#7c5dc1">0</font><font color="#8c76c5">1</font><font color="#beb6d1">0</font><font color="#d3d2d7">1</font><font color="#a5a3a4">0</font><font color="#ab5765">1</font><font color="#cc3c50">0</font><font color="#d62b43">1</font><font color="#bc2a41">0</font><font color="#6f6a6a">1</font><font color="#a2a2a2">0</font><font color="#7e4f56">1</font><font color="#d14745">0</font><font color="#cae64b">1</font><font color="#5779a8">0</font><font color="#30272a">1</font><font color="#494949">0</font><font color="#717171">1</font><font color="#9d9d9d">0</font><font color="#bdbdbd">1</font><font color="#d7d7d7">0</font><font color="#f2f2f2">1</font><font color="white">010</font><font color="#fefefe">1</font><font color="#f8f8f8">0</font><font color="#7d565b">1</font><font color="#b0263b">0</font><font color="#5f151f">1</font><font color="#120b0d">0</font><font color="black">1</font><br><font color="black">010</font><font color="#070311">1</font><font color="#5231a7">0</font><font color="#8e7ab8">1</font><font color="#b4accc">0</font><font color="#dedddf">1</font><font color="#fafafa">0</font><font color="#f8f8f8">1</font><font color="#f1f1f1">0</font><font color="#ededed">1</font><font color="#e8e8e8">0</font><font color="#b6b3b4">1</font><font color="#845a5f">0</font><font color="#7a2a34">1</font><font color="#6f474c">0</font><font color="#7c7b7c">1</font><font color="#ececec">0</font><font color="#8a4551">1</font><font color="#ce4b42">0</font><font color="#b1e367">1</font><font color="#5774af">0</font><font color="#d1d1d1">1</font><font color="white">010101</font><font color="#fdfdfd">0</font><font color="#f3f3f3">1</font><font color="#d9d9d9">0</font><font color="#afafaf">1</font><font color="#6d6d6d">0</font><font color="#262626">1</font><font color="#080606">0</font><font color="#020202">1</font><font color="black">01</font><br><font color="black">010</font><font color="#181818">1</font><font color="#d4d4d4">0</font><font color="#fdfdfd">1</font><font color="#f6f6f6">0</font><font color="#eeeeee">1</font><font color="#e9e9e9">0</font><font color="#e0e0e0">1</font><font color="#d0d0d0">0</font><font color="#c8c8c8">1</font><font color="#b2b2b2">0</font><font color="#a9a9a9">1</font><font color="#9a9a9a">0</font><font color="#848484">1</font><font color="#c3c3c3">0</font><font color="#e9e9e9">1</font><font color="white">0</font><font color="#88545b">1</font><font color="#72444c">0</font><font color="#629c75">1</font><font color="#4e60a5">0</font><font color="#e6e6e6">1</font><font color="white">010</font><font color="#fafafa">1</font><font color="#dfdfdf">0</font><font color="#b7b7b7">1</font><font color="#7c7c7c">0</font><font color="#444444">1</font><font color="#1d1d1d">0</font><font color="#050505">1</font><font color="black">010101</font><br><font color="black">010</font><font color="#0f0f0f">1</font><font color="#a4a4a4">0</font><font color="#e3e3e3">1</font><font color="#e7e7e7">0</font><font color="#d5d5d5">1</font><font color="#797979">0</font><font color="#a2a2a2">1</font><font color="#a3a3a3">0</font><font color="#595959">1</font><font color="#b7b7b7">0</font><font color="#a9a9a9">1</font><font color="#afafaf">0</font><font color="#e3e3e3">1</font><font color="#e7e7e7">0</font><font color="#e9e8e8">1</font><font color="#fef4f4">0</font><font color="#a09495">1</font><font color="#bab8b8">0</font><font color="#728487">1</font><font color="#445393">0</font><font color="#efefef">1</font><font color="#fdfdfd">0</font><font color="#f6f6f6">1</font><font color="#aeaeae">0</font><font color="#545454">1</font><font color="#272727">0</font><font color="#050505">1</font><font color="#030303">0</font><font color="black">101010101</font><br><font color="black">0101</font><font color="#040404">0</font><font color="#2f2f2f">1</font><font color="#5c5c5c">0</font><font color="#7f7f7f">1</font><font color="#777777">0</font><font color="#8a8a8a">1</font><font color="#989898">0</font><font color="#6e6e6e">1</font><font color="#cacaca">0</font><font color="#e1e1e1">1</font><font color="#e7e7e7">0</font><font color="#eaeaea">1</font><font color="#f0e3ca">0</font><font color="#faa677">1</font><font color="#ff9883">0</font><font color="#f79274">1</font><font color="#fac987">0</font><font color="#e9e8e1">1</font><font color="#5c5e6d">0</font><font color="#f5f5f5">1</font><font color="#f9f9f9">0</font><font color="#d7d7d7">1</font><font color="#171717">0</font><font color="#010101">1</font><font color="black">010101010101</font><br><font color="black">0101010</font><font color="#020202">1</font><font color="#030303">0</font><font color="#090909">1</font><font color="#181818">0</font><font color="#5f5f5f">1</font><font color="#eaeaea">0</font><font color="#f0f0f0">1</font><font color="#f7f7f7">0</font><font color="#bedae7">1</font><font color="#9adc9b">0</font><font color="#b3dc8f">1</font><font color="#9bd7ca">0</font><font color="#a7d8ac">1</font><font color="#8bc674">0</font><font color="#bee1cf">1</font><font color="#e2e8f2">0</font><font color="#fefefe">1</font><font color="white">0</font><font color="#bebebe">1</font><font color="#070707">0</font><font color="black">1010101010101</font><br><font color="black">0101010101</font><font color="#0b0b0b">0</font><font color="#bbbbbb">1</font><font color="#fdfdfd">0</font><font color="white">1</font><font color="#fefbfc">0</font><font color="#ba456a">1</font><font color="#e4dad3">0</font><font color="#e3adc1">1</font><font color="#bf869d">0</font><font color="#c77a9a">1</font><font color="#c7cce4">0</font><font color="#d1868e">1</font><font color="#de9eb5">0</font><font color="white">10</font><font color="#dedede">1</font><font color="#161616">0</font><font color="black">1010101</font><font color="#180c0d">0</font><font color="#090606">1</font><font color="black">0101</font><br><font color="black">010101010</font><font color="#030303">1</font><font color="#595959">0</font><font color="#fdfdfd">1</font><font color="white">010</font><font color="#ffe1c6">1</font><font color="#ffe78c">0</font><font color="#fce983">1</font><font color="#ffe388">0</font><font color="#fee3a1">1</font><font color="#fdef8c">0</font><font color="#ffdd9a">1</font><font color="#fff3ee">0</font><font color="white">10</font><font color="#f6f6f6">1</font><font color="#626262">0</font><font color="#050505">1</font><font color="black">010101</font><font color="#331419">0</font><font color="#44171e">1</font><font color="#0f121e">0</font><font color="#1c1f34">1</font><font color="#070707">0</font><font color="black">1</font><br><font color="black">010101010</font><font color="#1d1d1d">1</font><font color="#dcdcdc">0</font><font color="white">10</font><font color="#fffefd">1</font><font color="#ffeedb">0</font><font color="#ffefdc">1</font><font color="#fff6ea">0</font><font color="#fff0e2">1</font><font color="#fff2e6">0</font><font color="#fdc0aa">1</font><font color="#fff4e9">0</font><font color="#fff0e2">1</font><font color="#ffe9dc">0</font><font color="#fdcec5">1</font><font color="white">01</font><font color="#d3d3d3">0</font><font color="#1f1f1f">1</font><font color="#030303">0</font><font color="black">10101</font><font color="#100c0e">0</font><font color="#7d5897">1</font><font color="#5e74c4">0</font><font color="#29334d">1</font><font color="#0f1811">0</font><font color="#060805">1</font><br><font color="black">01010101</font><font color="#121212">0</font><font color="#b4b4b4">1</font><font color="white">010</font><font color="#fffef7">1</font><font color="#ebefa4">0</font><font color="#edf1b6">1</font><font color="#dcefb7">0</font><font color="#e5f2d3">1</font><font color="#f8f7cc">0</font><font color="#ebec9d">1</font><font color="#f8f7cd">0</font><font color="#e5f2d3">1</font><font color="#f9f6cb">0</font><font color="#eef4c8">1</font><font color="white">01</font><font color="#fdfdfd">0</font><font color="#b0b0b0">1</font><font color="#371b1f">0</font><font color="#462218">1</font><font color="#1a1a0a">0</font><font color="#070907">1</font><font color="#050405">0</font><font color="#21130c">1</font><font color="#616c2f">0</font><font color="#9fd09b">1</font><font color="#93cf7f">0</font><font color="#7fb05a">1</font><font color="#7e9c41">0</font><font color="#383612">1</font><br><font color="black">0101010</font><font color="#111111">1</font><font color="#a7a7a7">0</font><font color="#fefefe">1</font><font color="white">010</font><font color="#fdfdfd">1</font><font color="#dbdddb">0</font><font color="#b1b2b1">1</font><font color="#7b817e">0</font><font color="#5a5d59">1</font><font color="#4d4e4d">0</font><font color="#616360">1</font><font color="#9d9d9d">0</font><font color="#b5b8b5">1</font><font color="#d3d4d3">0</font><font color="#f2f4f2">1</font><font color="white">010</font><font color="#fcfcfc">1</font><font color="#b0abac">0</font><font color="#512f28">1</font><font color="#958819">0</font><font color="#8ea841">1</font><font color="#4c717e">0</font><font color="#987bad">1</font><font color="#9a5a54">0</font><font color="#c87b33">1</font><font color="#ae6430">0</font><font color="#623f20">1</font><font color="#131007">0</font><font color="#020201">1</font><br><font color="black">0101010</font><font color="#595959">1</font><font color="#fcfcfc">0</font><font color="white">1</font><font color="#fefefe">0</font><font color="#f7f7f7">1</font><font color="#c9c9c9">0</font><font color="#4f4f4f">1</font><font color="#171717">0</font><font color="#070707">1</font><font color="#020202">0</font><font color="#010101">101</font><font color="#020202">0</font><font color="#080808">1</font><font color="#171717">0</font><font color="#212121">1</font><font color="#565656">0</font><font color="#a7a7a7">1</font><font color="#f5f5f5">0</font><font color="#fdfdfd">1</font><font color="#fcfcfc">0</font><font color="#b8b8b8">1</font><font color="#343330">0</font><font color="#25220d">1</font><font color="#0d110e">0</font><font color="#243734">1</font><font color="#405c6e">0</font><font color="#252027">1</font><font color="#371216">0</font><font color="#631f25">1</font><font color="#341318">0</font><font color="#060606">1</font><br><font color="black">0101010</font><font color="#555555">1</font><font color="#e9e9e9">0</font><font color="#ececec">1</font><font color="#e9e9e9">0</font><font color="#e8e8e8">1</font><font color="#4a4a4a">0</font><font color="#010101">1</font><font color="black">0101010101</font><font color="#010101">0</font><font color="#060606">1</font><font color="#4e4e4e">0</font><font color="#dedede">1</font><font color="#e9e9e9">0</font><font color="#e8e8e8">1</font><font color="#cccccc">0</font><font color="#3a3a3a">1</font><font color="#050505">0</font><font color="black">1</font><font color="#020202">0</font><font color="#020303">1</font><font color="black">0</font><font color="#010101">10</font><font color="black">1</font><br><font color="black">0101010</font><font color="#191919">1</font><font color="#dadada">0</font><font color="#e7e7e7">101</font><font color="#505050">0</font><font color="black">1010101010101</font><font color="#060606">0</font><font color="#484848">1</font><font color="#dbdbdb">0</font><font color="#e7e7e7">10</font><font color="#d9d9d9">1</font><font color="#575757">0</font><font color="#0a0a0a">1</font><font color="black">010101</font><br><font color="black">010101</font><font color="#020202">0</font><font color="#211314">1</font><font color="#978f91">0</font><font color="#b09498">1</font><font color="#a78c90">0</font><font color="#a8868a">1</font><font color="#413c3c">0</font><font color="#020202">1</font><font color="black">0101010101010</font><font color="#050505">1</font><font color="#3a2f31">0</font><font color="#bcacaf">1</font><font color="#af5b68">0</font><font color="#9d525b">1</font><font color="#9a4b54">0</font><font color="#7b1e2b">1</font><font color="#220f12">0</font><font color="black">10101</font><br><font color="black">010101</font><font color="#080808">0</font><font color="#5c2730">1</font><font color="#ae8e94">0</font><font color="#8f2232">1</font><font color="#7d1b28">0</font><font color="#8a2031">1</font><font color="#231014">0</font><font color="black">101010101010101</font><font color="#090808">0</font><font color="#252323">1</font><font color="#351218">0</font><font color="#310e13">1</font><font color="#29090d">0</font><font color="#280d11">1</font><font color="#140c0d">0</font><font color="black">10101</font><br>
    </pre>
  </font>

  <ReactSlot {badgeContent}>
    {`
      <Badge badgeContent={badgeContent} color="primary"></Badge>
    `}
  </ReactSlot>

  <button on:click={() => badgeContent++}>inc</button>

  <ReactAdapter el={Divider} variant="middle" class={"mui-divider"} />

  <h3>A MUI React Button</h3>
  <ReactAdapter
    el={Button}
    class="mui-btn"
    children="Say Hello"
    variant="contained"
    color="primary"
    onClick={() => alert("Hello Fella!")}
  />

  <h3>An Outstanding Custom MUI React Table</h3>
  <ReactAdapter el={MyTable} />

  <h3>Simple Badge</h3>
  <ReactAdapter el={Badge} badgeContent={4} color="primary" />

  <h3>Multiple Badges with Children</h3>
  <ReactAdapter el={Badges} />
</main>

<style>
  /**
   * Styling a React Component using Svelte styles.
   */
  :global(.mui-btn) {
    margin: 20px;
  }

  :global(.mui-divider) {
    margin-bottom: 20px;
  }

  /* ----------------------------------------------- */

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    margin-top: 20px;
  }
  h1,
  h2,
  h3 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    margin: 0;
    line-height: 3.5rem;
  }
  h2 {
    font-size: 2em;
    margin-bottom: 30px;
  }
  h3 {
    font-size: 1em;
    font-weight: 300;
    color: #8800ff;
    margin-top: 30px;
  }
  @media (min-width: 640px) {
    main {
      max-width: 800px;
    }
  }
</style>
