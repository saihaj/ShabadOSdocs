---
title: URL Endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import aboutUrl from '@site/static/img/shabados-about-url.png'
import taskManager from '@site/static/img/ip-address-windows-task-manager.png'

<p class="lead">Shabad OS has a web URL for each page in the desktop app. You can view the display, controller, settings, and more through web URLs anywhere on the same network.</p>

| Endpoint                               | Description                                                                                                                                                                                 |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /                                      | The empty endpoint points to the default Shabad OS Presenter page (Users can get a controller from this page using the plus sign in the bottom right and then fullscreening the controller) |
| /controller/search?controllerOnly=true | A fullscreened controller in the search activity                                                                                                                                            |
| /overlay                               | HTML file showing all relevant fields of currently activated line. Can be styled/customized by CSS. See the [Overlay](../../tutorials/overlay) article for more information.                |

## Finding the URL of the server

The device running Shabad OS has an IP address. If the same device is running Shabad OS, you may simply use `localhost` or `127.0.0.1` for the IP address (i.e. with port: `http://localhost:1699/` or `http://127.0.0.1:1699/`).

If you'd like to connect through the same network on a different device, you may find the IP address of the Shabad OS server's device by clicking **About** in the Shabad OS Presenter's Settings window.

<img src={aboutUrl} alt="Settings About URL" width={500} />

## Imagining an example scenario

For example, if the device running Shabad OS has an IP address of `192.168.0.128`, then the url for the overlay endpoint would be `http://192.168.0.128:1699/overlay`. This could be used in a browser by any device on the same network. Allowing someone to use Shabad OS from one device and live stream from another.

## Troubleshooting the IP address

In case you cannot find the IP address using the Shabad OS desktop app, use the built-in system tools for your OS.

<Tabs
defaultValue="win"
values={[
{label: 'Windows 10', value: 'win'},
{label: 'macOS', value: 'mac'},
]}>
<TabItem value="win">

1. Open the **Task Manager** by either right-clicking the taskbar or using the hotkey `ctrl+shift+esc`.
2. Select the **Performance** tab, then select the Ethernet/Wi-Fi being used to connect to the network.

<img src={taskManager} alt="Task Manager" width={500} />

</TabItem>
<TabItem value="mac">

1. Open **System Preferences** from the Apple icon in the menubar.
2. Select **Network**, then select the Ethernet/Wi-Fi being used to connect to the network.

</TabItem>
</Tabs>
