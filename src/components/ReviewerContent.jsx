import React from "react";
import "./ReviewerContent.css";

const ReviewerContent = ({ subject, onClose }) => {
    const content = {
        SIA101: (
            <>
                <h3>Module 4: Business Process Integration-Oriented</h3>
                <ul>
                    <li>Allows integration by sharing information.</li>
                    <li>Defines a common business process model addressing sequence.</li>
                    <li>Binds disparate processes to create process-to-process solutions.</li>
                </ul>
                <h4>Technology Components</h4>
                <ol>
                    <li>Graphic modeling tool</li>
                    <li>Business process engine</li>
                    <li>Business process monitoring interface</li>
                    <li>Business process engine interface</li>
                    <li>Integration technology (middleware)</li>
                </ol>
                <h4>Technology Levels</h4>
                <ol>
                    <li>Process modeling</li>
                    <li>Transformation, routing, and rules</li>
                    <li>Messaging service</li>
                </ol>

                <h3>Module 5: Service-Oriented Integration</h3>
                <p>
                    Provides a mechanism to bind at the service level. Uses **Web Services** 
                    to realize service-oriented integration goals.
                </p>
                <h4>Solutions Architecture</h4>
                <ol>
                    <li>
                        <b>Event-driven:</b> Deals with information movement and application service aggregation.
                    </li>
                    <li>
                        <b>Composite-applications:</b> Aggregates application services into a single instance.
                    </li>
                    <li>
                        <b>Autonomous-distributed:</b> Web services tightly coupled to appear as a single application.
                    </li>
                </ol>
                <h4>Portal-Oriented Application Integration</h4>
                <ul>
                    <li>View multiple systems (internal and external).</li>
                    <li>
                        Faster implementation compared to other integration approaches.
                    </li>
                </ul>

                <h3>Module 6: Middleware</h3>
                <p>
                    Middleware facilitates communication between systems and allows information movement.
                </p>
                <h4>Middleware Models</h4>
                <ul>
                    <li>
                        <b>Logical:</b> Depicts how information moves within the enterprise.
                    </li>
                    <li>
                        <b>Physical:</b> Depicts the actual method of information movement.
                    </li>
                </ul>

                <h4>Types of Middleware</h4>
                <ul>
                    <li>
                        <b>Point-to-Point:</b> Simple pipe for linking applications.
                    </li>
                    <li>
                        <b>Many-to-Many:</b> Links multiple applications.
                    </li>
                    <li>
                        <b>Asynchronous:</b> Moves information asynchronously.
                    </li>
                    <li>
                        <b>Synchronous:</b> Tightly coupled to applications.
                    </li>
                </ul>

                <h4>ERP and Business Processes</h4>
                <ul>
                    <li>
                        <b>ERP:</b> Core software to coordinate business areas.
                    </li>
                    <li>
                        <b>Business Process:</b> Collection of activities that create value for the customer.
                    </li>
                </ul>

                <h4>Functional Areas of Operation</h4>
                <ol>
                    <li>Marketing and Sales</li>
                    <li>Supply Chain Management</li>
                    <li>Accounting and Finance</li>
                    <li>Human Resources</li>
                </ol>
            </>
        ),
        IS103: (
            <>
                <h3>Midterm Reviewer: IS103</h3>
                <h4>Local Area Network (LAN)</h4>
                <p>A collection of devices connected together in a physical location.</p>

                <h4>Network Topology Types:</h4>
                <ul>
                    <li>Point-to-Point</li>
                    <li>Bus</li>
                    <li>Ring</li>
                    <li>Star</li>
                    <li>Tree</li>
                    <li>Mesh</li>
                    <li>Hybrid</li>
                </ul>

                <h4>Types of LAN:</h4>
                <ul>
                    <li>Client/Server LAN</li>
                    <li>Peer-to-Peer LAN</li>
                </ul>

                <h4>Hardware Components of LAN:</h4>
                <ul>
                    <li>Workstations and Servers</li>
                    <li>Network Interface Card (NIC)</li>
                    <li>Cabling and Connectors</li>
                    <li>HUB, Connectors (Bridge and Switch)</li>
                </ul>

                <h4>Software Components of LAN:</h4>
                <ul>
                    <li>NIC Drivers</li>
                    <li>Network Operating Systems for Server</li>
                    <li>Network Operating Systems for Client</li>
                    <li>Network Protocol Software (TCP and IP)</li>
                    <li>Applications</li>
                </ul>

                <h4>Network Types:</h4>
                <ol>
                    <li>Personal Area Network (PAN)</li>
                    <li>Local Area Network (LAN)</li>
                    <li>Wireless LAN (WLAN)</li>
                    <li>Campus Area Network (CAN)</li>
                    <li>Metropolitan Area Network (MAN)</li>
                    <li>Wide Area Network (WAN)</li>
                    <li>Storage Area Network (SAN)</li>
                    <li>Passive Optical LAN (POLAN)</li>
                    <li>Enterprise Private Network (EPN)</li>
                    <li>Virtual Private Network (VPN)</li>
                </ol>

                <h4>Core Components of Data Center:</h4>
                <ul>
                    <li>Servers</li>
                    <li>Storage Systems</li>
                    <li>Network Equipment</li>
                    <li>Power Infrastructure (UPS)</li>
                    <li>Cooling Systems</li>
                    <li>Security Systems</li>
                    <li>Fire Suppression Systems</li>
                    <li>Management Software (DCIM)</li>
                    <li>Backup Systems</li>
                    <li>Physical Infrastructure</li>
                </ul>

                <h4>Network Management Requirements:</h4>
                <ul>
                    <li>Fault Management</li>
                    <li>Accounting Management</li>
                    <li>Configuration and Name Management</li>
                    <li>Performance Management</li>
                    <li>Security Management</li>
                </ul>
            </>
        ),
    };

    return (
        <div className="reviewer-content">
            <button className="close-btn" onClick={onClose}>
                Close
            </button>
            <h2>{subject.title}</h2>
            <div>{content[subject.title]}</div>
        </div>
    );
};

export default ReviewerContent;
