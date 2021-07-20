import React from "react";

import { List, Row, Col, Avatar } from "antd";

const prices = [
    ["Консультация", "3000 р/час", "icons/devops.png"],
    ["Найм персонала", 8000, "icons/desk.png"],
    ["Настройка Git и GitHub и систем трекинга для работы команды", 2500, "icons/git.png"],
    ["Настройка пайплайнов CI/CD (Github Actions, Gitlab CI, ...)", 7000, "icons/vnedren.png"],
    ["Докеризация сборки и отладки под разработчика и прод", 5000, "icons/docker.png"],
    ["Документирование текущей конфигурации системы", 5000, "icons/jira.png"],
    // ["Внедрения таск менеджмент систем Jira, Confluence", 12000, "icons/jira.png"],
    ["Поиск и устранение ошибок, помощь разработчикам", 11000, "icons/troubleshooting.png"],
    ["Создание отказоустойчивой инфраструктуры с распределением нагрузки", 12000, "icons/cluster.png"],
    ["Кластеризация готового приложения", 4000, "icons/cluster.png"],
    ["Настройка облаков (Yandex, AWS, Google) для запуска приложений и сайтов", 3500, "icons/gcloud.png"],
    ["Запуск имеющегося приложения в облачном Kubernetes", 2500, "icons/kubernetes.png"],
    ["Создание скриптов развертывания инфраструктуры (Ansible, Terraform, bash)", 2500, "icons/ansible.png"],
    ["Настройка систем логирования и мониторинга (ELK, Grafana, Loki, Prometheus)", 3500, "icons/monitor.png"],
]

const data = prices.map(([title, price, avatar]) => ({ title, price, avatar }))

const Devops = () => {
    return <>
        <Row justify="center" align="middle">
            <Col justify="center" xs={20} md={16} lg={12}>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar shape="square" src={item.avatar} />}
                                title={<span style={{ fontSize: "1.2em" }}> {item.title} </span>}
                            // description={item.description}
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
