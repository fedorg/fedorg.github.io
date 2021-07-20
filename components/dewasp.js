import React from "react";

import { List, Row, Col, Avatar } from "antd";

const data = [
    {
        title: 'DevOps консалтинг',
        price: 2500,
        avatar: "icons/devops.png"
    },
    {
        title: 'Сборка и деплой пакетов с помощью Ansible',
        price: 2500,
        avatar: "icons/ansible.png"
    },
    {
        title: 'Внедрение Agile процессов и найм персонала',
        price: 2500,
        avatar: "icons/vnedren.png"
    },
    {
        title: 'Траблшутинг различных задач и процессов, помощь разработчикам',
        price: 2500,
        avatar: "icons/troubleshooting.png"
    },
    {
        title: 'Внедрения сервиса применения конфигурации Ansible, Chef, Puppet',
        price: 2500,
        avatar: "icons/puppet.png"
    },
    {
        title: 'Настройка систем контроля версий на сервере SVN, GIT, Bitbucket, Mercurial и др.',
        price: 2500,
        avatar: "icons/git.png"
    },
    {
        title: 'Установка, настройка контейнеров Docker',
        price: 2500,
        avatar: "icons/docker.png"
    },
    {
        title: 'Настройка различных систем мониторинга, Nagios, Zabbix, Munin, Zenoss и др.',
        price: 2500,
        avatar: "icons/monitor.png"
    },
    {
        title: 'Настройка отказоустойчивых кластеров с распределением нагрузки',
        price: 2500,
        avatar: "icons/cluster.png"
    },
    {
        title: 'Внедрения таск менеджмент систем и их интеграция Jira, Service Desk, Confluence',
        price: 2500,
        avatar: "icons/jira.png"
    },
];


const Devops = () => {
    return <>
        <Row justify="center" align="middle">
            <Col justify="center" span={8}>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar shape="square" src={item.avatar} />}
                                title={<> {item.title} </>}
                                description={item.description}
                            />
                            <div style={{ marginLeft: "100px" }}>{item.price}</div>
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    </>
};
export default Devops;
