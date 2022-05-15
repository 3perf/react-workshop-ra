import Api from "api/Api";
import { ContainerWidgetProps } from "widgets/ContainerWidget";
import { ApiResponse } from "./ApiResponses";
import { WidgetProps } from "widgets/BaseWidget";
import axios, { AxiosPromise, CancelTokenSource } from "axios";
import { PageAction } from "constants/AppsmithActionConstants/ActionConstants";
import _ from "lodash";

export interface FetchPageRequest {
  id: string;
}

export interface FetchPublishedPageRequest {
  pageId: string;
  bustCache?: boolean;
}

export interface SavePageRequest {
  dsl: ContainerWidgetProps<WidgetProps>;
  layoutId: string;
  pageId: string;
}

export interface PageLayout {
  id: string;
  dsl: Partial<ContainerWidgetProps<any>>;
  layoutOnLoadActions: PageAction[][];
  layoutActions: PageAction[];
}

export type FetchPageResponse = ApiResponse & {
  data: {
    id: string;
    name: string;
    applicationId: string;
    layouts: Array<PageLayout>;
  };
};

export type FetchPublishedPageResponse = ApiResponse & {
  data: {
    id: string;
    dsl: Partial<ContainerWidgetProps<any>>;
    pageId: string;
  };
};

export interface SavePageResponse extends ApiResponse {
  data: {
    id: string;
    layoutOnLoadActions: PageAction[][];
    dsl: Partial<ContainerWidgetProps<any>>;
    messages: string[];
    actionUpdates: Array<{
      executeOnLoad: boolean;
      id: string;
      name: string;
    }>;
  };
}

export interface CreatePageRequest {
  applicationId: string;
  name: string;
  layouts: Partial<PageLayout>[];
}

export interface UpdatePageRequest {
  id: string;
  name: string;
  isHidden?: boolean;
}

export interface CreatePageResponse extends ApiResponse {
  data: unknown;
}

export interface FetchPageListResponse extends ApiResponse {
  data: {
    pages: Array<{
      id: string;
      name: string;
      isDefault: boolean;
      isHidden?: boolean;
      layouts: Array<PageLayout>;
    }>;
    organizationId: string;
  };
}

export interface DeletePageRequest {
  id: string;
}

export interface ClonePageRequest {
  id: string;
}

export interface UpdateWidgetNameRequest {
  pageId: string;
  layoutId: string;
  newName: string;
  oldName: string;
}

export interface UpdateWidgetNameResponse extends ApiResponse {
  data: PageLayout;
}

class PageApi extends Api {
  static url = "v1/pages";
  static refactorLayoutURL = "v1/layouts/refactor";
  static pageUpdateCancelTokenSource?: CancelTokenSource = undefined;
  static getLayoutUpdateURL = (pageId: string, layoutId: string) => {
    return `v1/layouts/${layoutId}/pages/${pageId}`;
  };

  static getPublishedPageURL = (pageId: string, bustCache?: boolean) => {
    const url = `v1/pages/${pageId}/view`;
    return !!bustCache ? url + "?v=" + +new Date() : url;
  };

  static updatePageUrl = (pageId: string) => `${PageApi.url}/${pageId}`;

  static fetchPage(
    pageRequest: FetchPageRequest,
  ): AxiosPromise<FetchPageResponse> {
    return Promise.resolve({
      status: 200,
      statusText: "OK",
      headers: { "Content-Type": "application/json" },
      config: {},
      responseMeta: { status: 200, success: true },
      data: {
        id: "6133780827f57a3fce2d1e47",
        name: "Page1",
        applicationId: "6133780827f57a3fce2d1e45",
        layouts: [
          {
            id: "6133780827f57a3fce2d1e46",
            userPermissions: [],
            dsl: {
              widgetName: "MainContainer",
              backgroundColor: "none",
              rightColumn: 1157.8999999999999,
              snapColumns: 16,
              detachFromLayout: true,
              widgetId: "0",
              topRow: 0,
              bottomRow: 880,
              containerStyle: "none",
              snapRows: 33,
              parentRowSpace: 1,
              type: "CANVAS_WIDGET",
              canExtend: true,
              version: 16,
              minHeight: 720,
              parentColumnSpace: 1,
              dynamicTriggerPathList: [],
              dynamicBindingPathList: [],
              leftColumn: 0,
              children: [
                {
                  widgetName: "Text1",
                  rightColumn: 4,
                  textAlign: "LEFT",
                  widgetId: "6972xxtj67",
                  topRow: 0,
                  bottomRow: 1,
                  parentRowSpace: 40,
                  isVisible: true,
                  fontStyle: "BOLD",
                  type: "TEXT_WIDGET",
                  textColor: "#231F20",
                  version: 1,
                  parentId: "0",
                  isLoading: false,
                  parentColumnSpace: 74,
                  dynamicTriggerPathList: [],
                  leftColumn: 0,
                  dynamicBindingPathList: [],
                  fontSize: "HEADING1",
                  text: "Next.js Issues Filter",
                },
                {
                  widgetName: "Text2",
                  rightColumn: 2,
                  textAlign: "RIGHT",
                  widgetId: "f07rakutl4",
                  topRow: 2,
                  bottomRow: 3,
                  parentRowSpace: 40,
                  isVisible: true,
                  fontStyle: "BOLD",
                  type: "TEXT_WIDGET",
                  textColor: "#231F20",
                  version: 1,
                  parentId: "0",
                  isLoading: false,
                  parentColumnSpace: 74,
                  dynamicTriggerPathList: [],
                  leftColumn: 0,
                  dynamicBindingPathList: [],
                  fontSize: "PARAGRAPH",
                  text: "Filter by date:",
                },
                {
                  widgetName: "DateField",
                  rightColumn: 5,
                  dateFormat: "YYYY-MM-DD",
                  widgetId: "ukb8hxrjt9",
                  topRow: 2,
                  bottomRow: 3,
                  parentRowSpace: 40,
                  isVisible: true,
                  datePickerType: "DATE_PICKER",
                  label: "",
                  type: "DATE_PICKER_WIDGET2",
                  version: 2,
                  parentId: "0",
                  isLoading: false,
                  parentColumnSpace: 74,
                  dynamicTriggerPathList: [],
                  leftColumn: 2,
                  dynamicBindingPathList: [],
                  isDisabled: false,
                  defaultDate: "",
                  dynamicPropertyPathList: [{ key: "defaultDate" }],
                },
                {
                  widgetName: "Text3",
                  rightColumn: 2,
                  textAlign: "LEFT",
                  widgetId: "i7xv5mthfc",
                  topRow: 3,
                  bottomRow: 4,
                  parentRowSpace: 40,
                  isVisible: true,
                  fontStyle: "BOLD",
                  type: "TEXT_WIDGET",
                  textColor: "#231F20",
                  version: 1,
                  parentId: "0",
                  isLoading: false,
                  parentColumnSpace: 74,
                  dynamicTriggerPathList: [],
                  leftColumn: 0,
                  dynamicBindingPathList: [],
                  fontSize: "PARAGRAPH",
                  text: "Filter by contents:",
                },
                {
                  widgetName: "SearchField",
                  rightColumn: 5,
                  widgetId: "43nq34lz6b",
                  topRow: 3,
                  bottomRow: 4,
                  parentRowSpace: 40,
                  isVisible: true,
                  label: "",
                  type: "INPUT_WIDGET",
                  version: 1,
                  parentId: "0",
                  isLoading: false,
                  parentColumnSpace: 74,
                  dynamicTriggerPathList: [],
                  resetOnSubmit: true,
                  leftColumn: 2,
                  dynamicBindingPathList: [],
                  inputType: "TEXT",
                  placeholderText: "Search by issue contents",
                },
                {
                  derivedColumns: {},
                  widgetName: "Table1",
                  rightColumn: 10,
                  textSize: "PARAGRAPH",
                  columnOrder: [
                    "title",
                    "user",
                    "labels",
                    "assignees",
                    "link",
                    "body",
                    "number",
                    "id",
                    "milestone",
                  ],
                  widgetId: "tiyr4gzzje",
                  topRow: 4,
                  bottomRow: 11,
                  parentRowSpace: 40,
                  tableData:
                    '{{ _.uniqBy(fetchNextJsIssues.data, (issue) => issue.number)\n\t.filter(issue => issue.body.includes(SearchField.text || \'\'))\n  .filter(issue => issue.created_at.startsWith(DateField.formattedDate || \'\'))\n  .map((issue) => {\n    const labels = issue.labels.map((label) => label.name).join(" · ");\n    return {\n      title: issue.title,\n      user: issue.user.login,\n      labels: labels,\n      assignees: issue.assignees.map((label) => label.login).join(" · "),\n\t\t\tmilestone: issue.milestone?.title,\n      link: issue.html_url,\n      body: issue.body,\n      number: issue.number,\n      id: issue.id,\n    };\n  })\n  .filter((row) => !row.labels.includes("template: bug"))\n  .sort((a, b) => {\n    const prioritiesArray = ["priority: p4", "priority: p3", "priority: p2", "priority: p1", "priority: p0"];\n    const featureArr = ["kind: story", "kind: bug"];\n    let aPri = prioritiesArray.findIndex((label) => a.labels.includes(label));\n    let aFtPri = featureArr.findIndex((label) => a.labels.includes(label));\n    aPri = aPri === -1 ? 0 : aPri;\n    aFtPri = aFtPri === -1 ? 0 : aFtPri;\n    let bPri = prioritiesArray.findIndex((label) => b.labels.includes(label));\n    bPri = bPri === -1 ? 0 : bPri;\n    let bFtPri = featureArr.findIndex((label) => b.labels.includes(label));\n    bFtPri = bFtPri === -1 ? 0 : bFtPri;\n    return bPri === aPri ? bFtPri - aFtPri : aPri > bPri ? -1 : 1;\n  })\n }}',
                  isVisible: true,
                  label: "Data",
                  searchKey: "",
                  type: "TABLE_WIDGET",
                  version: 1,
                  parentId: "0",
                  isLoading: false,
                  horizontalAlignment: "LEFT",
                  parentColumnSpace: 74,
                  dynamicTriggerPathList: [],
                  leftColumn: 0,
                  dynamicBindingPathList: [
                    { key: "primaryColumns.id.computedValue" },
                    { key: "tableData" },
                    { key: "primaryColumns.title.computedValue" },
                    { key: "primaryColumns.user.computedValue" },
                    { key: "primaryColumns.labels.computedValue" },
                    { key: "primaryColumns.assignees.computedValue" },
                    { key: "primaryColumns.link.computedValue" },
                    { key: "primaryColumns.body.computedValue" },
                    { key: "primaryColumns.number.computedValue" },
                    { key: "primaryColumns.milestone.computedValue" },
                  ],
                  primaryColumns: {
                    number: {
                      isDerived: false,
                      computedValue:
                        "{{Table1.sanitizedTableData.map((currentRow) => { return currentRow.number})}}",
                      textSize: "PARAGRAPH",
                      index: 6,
                      isVisible: true,
                      label: "number",
                      columnType: "text",
                      horizontalAlignment: "LEFT",
                      width: 150,
                      enableFilter: true,
                      enableSort: true,
                      id: "number",
                      verticalAlignment: "CENTER",
                    },
                    link: {
                      isDerived: false,
                      computedValue:
                        "{{Table1.sanitizedTableData.map((currentRow) => { return currentRow.link})}}",
                      textSize: "PARAGRAPH",
                      index: 4,
                      isVisible: true,
                      label: "link",
                      columnType: "text",
                      horizontalAlignment: "LEFT",
                      width: 150,
                      enableFilter: true,
                      enableSort: true,
                      id: "link",
                      verticalAlignment: "CENTER",
                    },
                    assignees: {
                      isDerived: false,
                      computedValue:
                        "{{Table1.sanitizedTableData.map((currentRow) => { return currentRow.assignees})}}",
                      textSize: "PARAGRAPH",
                      index: 3,
                      isVisible: true,
                      label: "assignees",
                      columnType: "text",
                      horizontalAlignment: "LEFT",
                      width: 150,
                      enableFilter: true,
                      enableSort: true,
                      id: "assignees",
                      verticalAlignment: "CENTER",
                    },
                    id: {
                      isDerived: false,
                      computedValue:
                        "{{Table1.sanitizedTableData.map((currentRow) => { return currentRow.id})}}",
                      textSize: "PARAGRAPH",
                      index: 0,
                      isVisible: true,
                      label: "id",
                      columnType: "text",
                      horizontalAlignment: "LEFT",
                      width: 150,
                      enableFilter: true,
                      enableSort: true,
                      id: "id",
                      verticalAlignment: "CENTER",
                    },
                    title: {
                      isDerived: false,
                      computedValue:
                        "{{Table1.sanitizedTableData.map((currentRow) => { return currentRow.title})}}",
                      textSize: "PARAGRAPH",
                      index: 0,
                      isVisible: true,
                      label: "title",
                      columnType: "text",
                      horizontalAlignment: "LEFT",
                      width: 150,
                      enableFilter: true,
                      enableSort: true,
                      id: "title",
                      verticalAlignment: "CENTER",
                    },
                    body: {
                      isDerived: false,
                      computedValue:
                        "{{Table1.sanitizedTableData.map((currentRow) => { return currentRow.body})}}",
                      textSize: "PARAGRAPH",
                      index: 5,
                      isVisible: true,
                      label: "body",
                      columnType: "text",
                      horizontalAlignment: "LEFT",
                      width: 150,
                      enableFilter: true,
                      enableSort: true,
                      id: "body",
                      verticalAlignment: "CENTER",
                    },
                    user: {
                      isDerived: false,
                      computedValue:
                        "{{Table1.sanitizedTableData.map((currentRow) => { return currentRow.user})}}",
                      textSize: "PARAGRAPH",
                      index: 1,
                      isVisible: true,
                      label: "user",
                      columnType: "text",
                      horizontalAlignment: "LEFT",
                      width: 150,
                      enableFilter: true,
                      enableSort: true,
                      id: "user",
                      verticalAlignment: "CENTER",
                    },
                    labels: {
                      isDerived: false,
                      computedValue:
                        "{{Table1.sanitizedTableData.map((currentRow) => { return currentRow.labels})}}",
                      textSize: "PARAGRAPH",
                      index: 2,
                      isVisible: true,
                      label: "labels",
                      columnType: "text",
                      horizontalAlignment: "LEFT",
                      width: 150,
                      enableFilter: true,
                      enableSort: true,
                      id: "labels",
                      verticalAlignment: "CENTER",
                    },
                    milestone: {
                      index: 8,
                      width: 150,
                      id: "milestone",
                      horizontalAlignment: "LEFT",
                      verticalAlignment: "CENTER",
                      columnType: "text",
                      textSize: "PARAGRAPH",
                      enableFilter: true,
                      enableSort: true,
                      isVisible: true,
                      isDerived: false,
                      label: "milestone",
                      computedValue:
                        "{{Table1.sanitizedTableData.map((currentRow) => { return currentRow.milestone})}}",
                    },
                  },
                  verticalAlignment: "CENTER",
                },
                {
                  widgetName: "StatsChart",
                  rightColumn: 6,
                  allowHorizontalScroll: false,
                  widgetId: "a4kr6aghah",
                  topRow: 12,
                  bottomRow: 20,
                  parentRowSpace: 40,
                  isVisible: true,
                  type: "CHART_WIDGET",
                  version: 1,
                  parentId: "0",
                  isLoading: false,
                  chartData: [
                    {
                      data:
                        "{{ Object.entries(_.countBy(fetchNextJsIssues.data, i => i.created_at.split('T')[0])).map(([key, value]) => ({ x: key, y: value })) }}",
                      seriesName: "Issues",
                    },
                  ],
                  yAxisName: "Total Issues",
                  parentColumnSpace: 74,
                  chartName: "Issues Per Day",
                  leftColumn: 0,
                  xAxisName: "Day",
                  chartType: "LINE_CHART",
                  dynamicBindingPathList: [{ key: "chartData[0].data" }],
                  dynamicTriggerPathList: [],
                },
              ],
            },
            layoutOnLoadActions: [
              [
                {
                  id: "613378ff27f57a3fce2d1e48",
                  name: "fetchNextJsIssues",
                  pluginType: "API",
                  jsonPathKeys: [],
                  timeoutInMillisecond: 10000,
                },
              ],
            ],
            new: false,
          },
        ],
        userPermissions: ["read:pages", "manage:pages"],
      },
    }) as any;
  }

  static savePage(
    savePageRequest: SavePageRequest,
  ): AxiosPromise<SavePageResponse> | undefined {
    if (PageApi.pageUpdateCancelTokenSource) {
      PageApi.pageUpdateCancelTokenSource.cancel();
    }
    PageApi.pageUpdateCancelTokenSource = axios.CancelToken.source();
    return Promise.resolve({
      status: 200,
      statusText: "OK",
      headers: { "Content-Type": "application/json" },
      config: {},
      responseMeta: { status: 200, success: true },
      data: {
        id: "6133780827f57a3fce2d1e46",
        dsl: _.cloneDeep(savePageRequest.dsl),
        layoutOnLoadActions: [
          [
            {
              id: "613378ff27f57a3fce2d1e48",
              name: "fetchNextJsIssues",
              pluginType: "API",
              jsonPathKeys: [],
              timeoutInMillisecond: 10000,
            },
          ],
        ],
        actionUpdates: [],
        messages: [],
        userPermissions: [],
      },
    }) as any;
  }

  static fetchPublishedPage(
    pageRequest: FetchPublishedPageRequest,
  ): AxiosPromise<FetchPublishedPageResponse> {
    return Api.get(
      PageApi.getPublishedPageURL(pageRequest.pageId, pageRequest.bustCache),
    );
  }

  static createPage(
    createPageRequest: CreatePageRequest,
  ): AxiosPromise<FetchPageResponse> {
    return Api.post(PageApi.url, createPageRequest);
  }

  static updatePage(request: UpdatePageRequest): AxiosPromise<ApiResponse> {
    return Api.put(PageApi.updatePageUrl(request.id), request);
  }

  static fetchPageList(
    applicationId: string,
  ): AxiosPromise<FetchPageListResponse> {
    return Promise.resolve({
      status: 200,
      statusText: "OK",
      headers: { "Content-Type": "application/json" },
      config: {},
      responseMeta: { status: 200, success: true },
      data: {
        organizationId: "60b0137977bd5c1e8d9f276c",
        pages: [
          { id: "6133780827f57a3fce2d1e47", name: "Page1", isDefault: true },
        ],
      },
    }) as any;
  }

  static fetchPageListViewMode(
    applicationId: string,
  ): AxiosPromise<FetchPageListResponse> {
    return Api.get(PageApi.url + "/view/application/" + applicationId);
  }

  static deletePage(request: DeletePageRequest): AxiosPromise<ApiResponse> {
    return Api.delete(PageApi.url + "/" + request.id);
  }

  static clonePage(request: ClonePageRequest): AxiosPromise<ApiResponse> {
    return Api.post(PageApi.url + "/clone/" + request.id);
  }

  static updateWidgetName(
    request: UpdateWidgetNameRequest,
  ): AxiosPromise<UpdateWidgetNameResponse> {
    return Api.put(PageApi.refactorLayoutURL, request);
  }
}

export default PageApi;
