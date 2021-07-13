import React from "react";

import { List, Row, Col, Avatar } from "antd";

const data = [
    {
        title: 'DevOps консалтинг',
        price: 2500,
        avatar: "https://lh3.googleusercontent.com/pw/AM-JKLWFK_L7Mem1Pe4DoOFikog_s075FcWipW9cxQH9fRtg8z5WOv7UZNwWLFOBLoyAvZElOOxrKY89taoc-DQMtdLFPv4wyD5ZqyuRik2uuE0dVbkbrLeNd9snxptjaqXLgL2gM3NJ2hohEF4E3R8W_w7h=s900-no?authuser=0"
    },
    {
        title: 'Сборка и деплой пакетов с помощью Ansible',
        price: 2500,
        avatar: "https://lh3.googleusercontent.com/pw/AM-JKLWsiVCSR0kGL3_n6miDLVbVVm_j0uO69LB8Xnieg5kRMfv2nVbegW5fUuio48-AuJ1YpKD_z-gYHwuPK3yE4emGG85k7tguFXzBp2Gxvd5NuD07H1mwvEKasoe9kbgOOCbrjEmm2rroiR8S2w_Rm7AJ=w900-h901-no?authuser=0"
    },
    {
        title: 'Траблшутинг различных задач и процессов, помощь разработчикам',
        price: 2500,
        avatar: "https://lh3.googleusercontent.com/pw/AM-JKLU8yDRSPv0VPD9Ct__7r7oCFw4RwUTdvp__1tvFRFsf9WaCWC0qIGAd8wB1rSN3oDAwLU8ZsnOF3uR8GfztSq97-qTdjcSkhq29NkxfKScHOnEtl5f30S_rNLJLZa4_iy6EVGgBiDMBVJNDhKIgXDe-=w920-h926-no?authuser=0"
    },
    {
        title: 'Внедрения сервиса применения конфигурации Ansible, Chef, Puppet',
        price: 2500,
        avatar: "https://lh3.googleusercontent.com/pw/AM-JKLW7jVDb2TBBg3L6TSHcgdOUqht0eV_BPq3aYTqA6_qkQ3HS3kENwYTvzz9M8KnSJshbmEVaTaYZlZQjR77PePVFXK_ZnzQqr2Z9OkE0TAY304oylpdy_c_5kqucaGJ5OM61ADblMqPLQYSEU29NSuGM=w920-h700-no?authuser=0"
    },
    {
        title: 'Настройка систем контроля версий на сервере SVN, GIT, Bitbucket, Mercurial и др.',
        price: 2500,
        avatar: "https://lh3.googleusercontent.com/pw/AM-JKLWpkBAyporkq9ebnNvU7hVTDl8MRgd1t9IEAdTdYbBXyTw-BjGcnZmxHZc_nAgftvDKlxuF6Y9sV8cUOXD1bRD6D3BJPKcRIn7D-mOnlbNWa_3IDBu1fgi9u5geJTbLWjlbMnn5WyHcipPK4-QYi9CD=s348-no?authuser=0"
    },
    {
        title: 'Установка, настройка контейнеров Docker',
        price: 2500,
        avatar: "https://lh3.googleusercontent.com/pw/AM-JKLUcdXbkDzMEPOWvSils545jFx-QQULafsG_0nogPkCthu_QBgG2ih7-LlZlD2ZYSSKVay9CImogfjH7sP9peL5Q8MAhjhrhb2tOIsUWLnf6UoWBFclNmce2wIpogILBs2NYyx90i_sMYeUEEDLyq4ih=s840-no?authuser=0"
    },
    {
        title: 'Настройка различных систем мониторинга, Nagios, Zabbix, Munin, Zenoss и др.',
        price: 2500,
        avatar: "https://lh3.googleusercontent.com/pw/AM-JKLW4PLSwzotpipBiL3Rho_x9Yoybo2KcgXG6nK_77cL_IAzsc7cNlE81lLDP4Sj94jUvyTyH15bharKmOuquPniLlACe1gVrdMWN4M2kP_iDd1ktytjp4ia2DDPYVfr0SfHWbv_e7gQcITOAZe3v9kO2=s920-no?authuser=0"
    },
    {
        title: 'Настройка отказоустойчивых кластеров с распределением нагрузки',
        price: 2500,
        avatar: "https://lh3.googleusercontent.com/pw/AM-JKLUPJZOpdCMvTavcXd-x0I_WlCKBqlCfL39Zod5S2vMvAEw05AO0t_3gTsMqLc8Dno0aeI7Sv1_xaCjC5y4S90Iuxs5nBPaMJQpCWgItRLwxxW5fT2l-X0sJ5g3aWEXxcZhsPnb0WfFEFuvMZqPCyyFP=w840-h917-no?authuser=0"
    },
    {
        title: 'Внедрения такс менеджмент систем и их интеграция Jira, Service Desk, Confluence',
        price: 2500,
        avatar: "https://lh3.googleusercontent.com/pw/AM-JKLXSQVgMSgTVhA207itN4WFIca_d3npaEG4JTY0wKQG9oRjeJ55QBbTEeKq-lxQN7IpXUmZTxwmPVA0OqKwjFTJcCY32kB33AV6tbbAiE16eMy8vye2WRt3TmWFltb_yfOY3n_0NHqoxmxk2HScXb3nB=s500-no?authuser=0"
    },
];


export const Devops = () => {
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