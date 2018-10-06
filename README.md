# SensorDataCollector
This is a multi purpose mobile phone sensor data collection app. Initially this will be used to collect data for a classification where the collected data will be used to train a model to classify whether the user is in a train or not.

Following are the labels we are going to collect the data for:

<table>
    <thead>
        <tr>
            <th>Mandatory</th>
            <th colspan=3>Optional</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Train</td>
            <td>Train type:<ul>
                    <li>Express</li>
                    <li>Slow</li>
                    <li>Intercity</li>
                </ul>
            </td>
            <td rowspan=2>
                <ul>
                    <li>Sitting</li>
                    <li>Standing</li>
                </ul>
            </td>
            <td>Class:
                <ul>
                    <li>1st class</li>
                    <li>2nd class</li>
                    <li>3rd class</li>
                </ul>
            </td>
        </tr>
        <tr>

            <td>Bus</td>
            <td rowspan=7>Road type:<ul>
                    <li>Highway</li>
                    <li>Carpet road</li>
                    <li>Road with low maintainance</li>
                    <li>Gravel road</li>
                    <li>Path</li>
                </ul>
            </td>
            <td>Type:
                <ul>
                    <li>Highway bus</li>
                    <li>Intercity</li>
                    <li>Semi luxury</li>
                    <li>Normal</li>
                    <li>Double decker</li>
                    <li>One door bus</li>
                </ul>
            </td>
        </tr>
        <tr>
        <tr>

            <td>Walking</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Car/Personal vehicle</td>
            <td>Condition:
                <ul>
                    <li>brandnew</li>
                    <li>old(10+ years)</li>
                </ul>
            </td>
            <td>Manufaturing country:
                <ul>
                    <li>Japan</li>
                    <li>India</li>
                    <li>Other</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Bike</td>
            <td rowspan=2>
                <ul>
                    <li>rider</li>
                    <li>passenger</li>
                </ul>
            </td>

            <td></td>
        </tr>
        <tr>
            <td>Bicycle</td>
            <td></td>
        </tr>
        <tr>
            <td>Other</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
