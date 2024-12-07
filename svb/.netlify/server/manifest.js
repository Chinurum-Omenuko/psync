export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/.DS_Store","images/PartnerSync banner.svg","images/PartnerSync graphics-01.svg","images/PartnerSync graphics-02.svg","images/PartnerSync graphics-03.svg","images/green-logo.svg","images/icons/bell.svg","images/icons/courses.svg","images/icons/expressed-interests.svg","images/icons/home.svg","images/icons/inbox.svg","images/icons/notif-belll.svg","images/icons/projects.svg","images/image.svg","images/white_logo.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.BEtzPcvN.js","app":"_app/immutable/entry/app.l4JP09ln.js","imports":["_app/immutable/entry/start.BEtzPcvN.js","_app/immutable/chunks/entry.DpS0zjq9.js","_app/immutable/chunks/runtime.Cc3v3xwM.js","_app/immutable/entry/app.l4JP09ln.js","_app/immutable/chunks/runtime.Cc3v3xwM.js","_app/immutable/chunks/render.C5AyQ_sf.js","_app/immutable/chunks/events.Gw7YoPuC.js","_app/immutable/chunks/disclose-version.BtPery2Q.js","_app/immutable/chunks/if.DVMv-wvu.js","_app/immutable/chunks/proxy.DFrJ9LLF.js","_app/immutable/chunks/props.BlGnt68S.js","_app/immutable/chunks/store.Ddh2Ovy9.js","_app/immutable/chunks/index-client.Baoge49B.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":true},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/activities",
				pattern: /^\/api\/activities\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/activities/_server.ts.js'))
			},
			{
				id: "/api/courses",
				pattern: /^\/api\/courses\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/courses/_server.ts.js'))
			},
			{
				id: "/api/interests/project",
				pattern: /^\/api\/interests\/project\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/interests/project/_server.ts.js'))
			},
			{
				id: "/api/mail",
				pattern: /^\/api\/mail\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/mail/_server.ts.js'))
			},
			{
				id: "/api/projects",
				pattern: /^\/api\/projects\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/projects/_server.ts.js'))
			},
			{
				id: "/api/users",
				pattern: /^\/api\/users\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/users/_server.ts.js'))
			},
			{
				id: "/dashboard/courses",
				pattern: /^\/dashboard\/courses\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/dashboard/home",
				pattern: /^\/dashboard\/home\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/dashboard/message",
				pattern: /^\/dashboard\/message\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/dashboard/projects",
				pattern: /^\/dashboard\/projects\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/dashboard/register",
				pattern: /^\/dashboard\/register\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/dashboard/register/course",
				pattern: /^\/dashboard\/register\/course\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/dashboard/register/project",
				pattern: /^\/dashboard\/register\/project\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/main",
				pattern: /^\/main\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/signin",
				pattern: /^\/signin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
