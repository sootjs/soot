export const xlinkNS = "http://www.w3.org/1999/xlink";
export const xmlNS = "http://www.w3.org/XML/1998/namespace";
export const svgNS = "http://www.w3.org/2000/svg";

export const booleanProps = new Set<string>();
booleanProps.add("muted");
booleanProps.add("scoped");
booleanProps.add("loop");
booleanProps.add("open");
booleanProps.add("checked");
booleanProps.add("default");
booleanProps.add("capture");
booleanProps.add("disabled");
booleanProps.add("readOnly");
booleanProps.add("required");
booleanProps.add("autoplay");
booleanProps.add("controls");
booleanProps.add("seamless");
booleanProps.add("reversed");
booleanProps.add("allowfullscreen");
booleanProps.add("novalidate");
booleanProps.add("hidden");
booleanProps.add("autofocus");
booleanProps.add("selected");
booleanProps.add("multiple");

export const namespaces = new Map<string, string>();
namespaces.set("xlink:href", xlinkNS);
namespaces.set("xlink:arcrole", xlinkNS);
namespaces.set("xlink:actuate", xlinkNS);
namespaces.set("xlink:show", xlinkNS);
namespaces.set("xlink:role", xlinkNS);
namespaces.set("xlink:title", xlinkNS);
namespaces.set("xlink:type", xlinkNS);
namespaces.set("xml:base", xmlNS);
namespaces.set("xml:lang", xmlNS);
namespaces.set("xml:space", xmlNS);

export const skipProps = new Set<string>();
skipProps.add("children");
skipProps.add("ref");
skipProps.add("key");
skipProps.add("className");

export const syntheticEvents = new Set<string>();
syntheticEvents.add("onClick");
syntheticEvents.add("onMouseDown");
syntheticEvents.add("onMouseUp");
syntheticEvents.add("onMouseMove");
syntheticEvents.add("onSubmit");
syntheticEvents.add("onDblClick");
syntheticEvents.add("onKeyDown");
syntheticEvents.add("onKeyUp");
syntheticEvents.add("onKeyPress");
