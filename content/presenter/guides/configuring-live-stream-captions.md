---
title: Configuring Live Stream Captions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import settingsOverlayUrl from '@site/static/img/settings-overlay-url.png'
import obsStudio from '@site/static/img/add-browser-obs-studio.png'
import vMix from '@site/static/img/add-browser-vmix.png'
import wirecastAddWebpage from '@site/static/img/wirecast-add-web-page.png'
import wirecastSourceProperties from '@site/static/img/wirecast-source-properties.png'
import wirecastShotLayerProperties from '@site/static/img/wirecast-shot-layer-properties.png'

<p class="lead">Learn how to set up popular live stream software with captions using Shabad OS's Overlays.</p>

## Finding the Overlay URL for Shabad OS

In **Shabad OS**, use the cog/gear icon in the controller to open **Settings**. Choose **Overlay** in the left pane, then click the **Overlay URL** to copy the URL to your system clipboard.

<img src={settingsOverlayUrl} width={500} />

## Adding a browser to the live stream

In the live stream software, add a browser to the scene. If the browser is not sized to match the live stream's resolution correctly, it may result in blurry text.

<Tabs
defaultValue="obs-studio"
values={[
{label: 'OBS Studio', value: 'obs-studio'},
{label: 'vMix', value: 'vmix'},
{label: 'Wirecast', value: 'wirecast'},
{label: 'Streamlabs (iOS)', value: 'streamlabs'},
]}>
<TabItem value="obs-studio">

**Finding the Base (Canvas) Resolution**

1. Use the **File** menu, then click **Settings**.
2. Click **Video** in the left pane.
3. Note down the **Base (Canvas) Resolution**.
4. Click **OK** or **Cancel** to close the window.

**Adding a browser to the scene**

<img src={obsStudio} alt="OBS Studio" width={500} />

1. Click the **+** button in **Sources** to add a **Browser** to the scene.
2. Fill in the **URL** with the Overlay URL from Shabad OS.
3. Fill the **Width** and **Height** to match the Base (Canvas) Resolution. The resolution is displayed width first, height second. E.g. "1920x1080" means width=1920 and height=1080.
4. Delete any text in **Custom CSS**.

</TabItem>
<TabItem value="vmix">

**Finding the Output Size**

1. Open **Settings**, then click on **Display**
2. Note down the **Output Size**
3. Close the window.

**Adding a web browser to the input bar**

<img src={vMix} alt="vMix" width={500} />

1. In the Main Window, use the **Add Input** menu, then click **More**.
2. Click on **Web Browser** in the left pane.
3. Fill in the **URL** with the Overlay URL from Shabad OS.
4. Fill the **Width** and **Height** to match the Output Size. The resolution is displayed width first, height second. E.g. "1920x1080" means width=1920 and height=1080.

</TabItem>
<TabItem value="wirecast">

**Finding the Canvas Size**

1. Use the **Output** menu, then select the **Canvas Size** sub-menu.
2. Note down the **Canvas Size**.

**Adding a web page shot layer to the master layer**

1. Click the **Plus Button** (+) on the first-most/top-most layer in the shot list to open the Add Shot menu. There may be a prompt to install Flash -- it is not required for Shabad OS.

   <img src={wirecastAddWebpage} alt="Wirecast add web page" width={500} />

2. Select the **Network** shot category from the left pane.
3. Select **Web Page**, then click **Add**.
4. In **Edit Shot**, select the **Source Properties** tab.

   <img src={wirecastSourceProperties} alt="Wirecast source properties" width={500} />

5. Fill in the **Address** with the Overlay URL from Shabad OS.
6. Fill the **Video Width** and **Video Height** fields to match the Canvas Size. The resolution is displayed width first, height second. E.g. "1920x1080" means width=1920 and height=1080.
7. In **Edit Shot**, select the **Shot Layer Properties** tab.

   <img src={wirecastShotLayerProperties} alt="Wirecast shot layer properties" width={500} />

8. Set the **Scale** slider to 100%.

</TabItem>
<TabItem value="streamlabs">

:::warning
This only works on the iOS version of Streamlabs until the developers fix an issue requiring "https" links on their Android app. This requires an iPhone or iPad in addition to the laptop or desktop that is running the Presenter app.
:::

**Adding a URL layer to the Streamlabs Editor**

1. Tap the **Menu Button** (=) on the top left.
2. In **Advanced Mode**, tap **Editor**.
3. Tap **Layers** on the top right.
4. Tap the **Plus Button** (+) on the top right.
5. Tap **Add a custom item**.
6. Tap **Add a URL**.
7. Fill in the **URL** with the Overlay URL from Shabad OS.

:::caution
Though the hint text in Streamlabs mentions `https` be sure to use `http` instead for the URL from the Shabad OS Presenter. For example, if the Shabad OS Presenter says the URL is `192.168.1.50:1699/overlay`, then type `http://192.168.1.50:1699/overlay` into Streamlabs.
:::

1. Tap **Add**.
2. Resize the layer. See **Tips for resizing** below.
3. Tap **Save** in the top left corner.

**Tips for resizing the layer**

- Move the layer by tapping and dragging the center of the layer.
- Resize the layer in the Streamlabs Editor by tapping and dragging either the squares in the corners or the lines on each side of the layer.
- An easy way to full screen a layer is to move the layer to the bottom left and then use the top right corner to resize it all the way to the top right.
- When switching from landscape to portrait mode, it is possible to reset all the layers to their original size by tapping **Reset** in the top right corner. If the **Reset** button is being covered by the Overlay layer, it might be easier to simply delete and recreate the Overlay layer.
- Play with different heights to control the font size. Decreasing the height of the Shabad OS Overlay will make the font sizes smaller. This is especially helpful for portrait mode.

</TabItem>
</Tabs>

## Troubleshoot

If there is no Overlay URL in Shabad OS settings, please read [URL Endpoints](/presenter/reference/url-endpoints).
