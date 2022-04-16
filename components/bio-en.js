export default function Bio() {
	return (<>
		<div className="row header"></div>
		<div className="row section">
			<div className="seven columns contacts">
				<div className="row">
					<h4>Fedor Golishevskii</h4>
				</div>
				<p>
					<a href="mailto:fed0000r@gmail.com">fed0000r@gmail.com</a><br />
					{/* <a href="tel:+79117174549">+7(911) 717-45-49</a> <br /> */}
					DevOps (2y+)<br />
					Age: 28<br />
					{/* <span style={{whiteSpace: 'nowrap'}}>I've been doing IT for years geez omg help help</span> */}
				</p>
				<div className="row link-icons">
					<a href="https://github.com/fedorg"><i className="fa fa-github"></i></a>
					{/* <a href="https://vk.com/kerneloops"><i className="fa fa-vk"></i></a> */}
					<a href="https://wa.me/qr/FYU2V6USSYINE1"><i className="fa fa-whatsapp"></i></a>
					<a href="skype:golishevski?chat"><i className="fa fa-skype"></i></a>
					<a href="https://www.linkedin.com/in/golishevski"><i className="fa fa-linkedin"></i></a>
					<a href="https://www.twitter.com/fed0rg"><i className="fa fa-twitter"></i></a>
				</div>
			</div>
			<div className="five columns">
				<div className="avatar">
					<img alt="avatar" title="" src="/a872baa67fdf560b93551310840dc081.jpg" />
				</div>
			</div>
		</div>
		<div className="row section">
			<div className="six columns">
				<h4>Areas of expertise</h4>
				<ul className="nobullets">
					<li><code>DevOps</code><code>SRE</code><code>IaC</code><code title="that's a cloud" style={{fontFamily: "emoji"}}>☁️</code></li>
					<li><code>Observability</code><code>Microservices</code></li>
					<li><code>Software architecture</code></li>
					<li title="don't judge it by this site; I've started it when Bootstrap was popular and never bothered to update it. Not to brag but am in top 5% React devs on LinkedIn. I'm learning Swift now though"><code>Frontend development</code></li>
				</ul>
			</div>
			<div className="six columns">
				<h4>Technologies</h4>
				<ul className="nobullets">
					<li>
						<code>go</code>
						<code>python</code>
						<code>ts</code>
						<code>bash</code>
						<code>c++</code>
						<code>react</code>
					</li>
				</ul>
				<ul className="nobullets">
					<li>
						<code>terraform</code>
						<code>nomad</code>
						<code>k8s</code>
						<code>ansible</code>
						<code>ci/cd</code>
					</li>
					<li>
						<code>grafana</code>
						<code>loki</code>
						<code>prometheus</code>
						<code>jaeger</code>
					</li>
					<li>
						<code>nginx</code>
						<code>websockets</code>
						<code>grpc</code>
						<code>graphql</code>
					</li>
					<li>
						<code>mongo</code>
						<code>docker</code>
						<code>consul</code>
						<code>vault</code>
						<code>...</code>
					</li>
				</ul>
			</div>
		</div>
		<div className="row section">
			<div className="six columns">
				<h4>Education</h4>
				<ul>
					<li>2015 MSc Biochemistry</li>
					<li>Languages: ru, en</li>
				</ul>
			</div>
			<div className="six columns">
				<h4>Jobs</h4>
				<ul>
					<li>Lead DevOps <a href="https://sberdevices.ru"><span className="workplace">@sberDevices</span></a></li>
					<li>DevOps <a href="https://biocad.ru"><span className="workplace">@biocad</span></a></li>
					<li>Full-stack dev <a href="https://biocad.ru"><span className="workplace">@biocad</span></a></li>
				</ul>
			</div>
		</div>
		<div className="row section">
			<div className="six columns">
				<h4>Want to learn about</h4>
				<ul className="split">
					<li>Neural networks</li>
					<li>Biocomputing</li>
					<li>Hypervisors</li>
					<li>Niche industries</li>
				</ul>
			</div>
			<div className="six columns">
				<h4 className="captionhack">Want to learn</h4>
				<ul className="split">
					<li>FPGA (Verilog/VHDL)</li>
					<li>linux driver development</li>
					<li>Unikernels</li>
					<li>zig language</li>
					<li>Haskell :^)</li>
				</ul>
			</div>
		</div>

		<div className="row footer">
		</div>
	</>
	)
}
