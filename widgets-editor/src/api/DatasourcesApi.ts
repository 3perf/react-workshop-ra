import { DEFAULT_TEST_DATA_SOURCE_TIMEOUT_MS } from "constants/ApiConstants";
import API from "api/Api";
import { GenericApiResponse } from "./ApiResponses";
import { AxiosPromise } from "axios";

import { DatasourceAuthentication, Datasource } from "entities/Datasource";
export interface CreateDatasourceConfig {
  name: string;
  pluginId: string;
  datasourceConfiguration: {
    url: string;
    databaseName?: string;
    authentication?: DatasourceAuthentication;
  };
  //Passed for logging purposes.
  appName?: string;
}

export interface EmbeddedRestDatasourceRequest {
  datasourceConfiguration: { url: string };
  invalids: Array<string>;
  isValid: boolean;
  name: string;
  organizationId: string;
  pluginId: string;
}

class DatasourcesApi extends API {
  static url = "v1/datasources";

  static fetchDatasources(
    orgId: string,
  ): AxiosPromise<GenericApiResponse<Datasource[]>> {
    return Promise.resolve({
      status: 200,
      statusText: "OK",
      headers: { "Content-Type": "application/json" },
      config: {},
      responseMeta: { status: 200, success: true },
      data: [
        {
          id: "6106ae34b3d9dc55de11abeb",
          userPermissions: [
            "execute:datasources",
            "manage:datasources",
            "read:datasources",
          ],
          name: "GitHub",
          pluginId: "60916df3f41c6d1ea7e23d0f",
          organizationId: "60b0137977bd5c1e8d9f276c",
          datasourceConfiguration: {
            sshProxyEnabled: false,
            properties: [
              { key: "isSendSessionEnabled", value: "N" },
              { key: "sessionSignatureKey", value: "" },
            ],
            url: "https://api.github.com",
            headers: [
              {
                key: "Authorization",
                value:
                  "Basic TmlraGlsLU5hbmRhZ29wYWw6ODJjY2ZlMDljN2M4MDU5M2VkOTRjZTI1OTA0OTEyYmQ1OTA0NWJmNA==",
              },
              { key: "Accept", value: "application/vnd.github.v3+json" },
            ],
          },
          invalids: [],
          messages: [],
          isValid: true,
          new: false,
        },
        {
          id: "6133791f27f57a3fce2d1e49",
          userPermissions: [
            "execute:datasources",
            "manage:datasources",
            "read:datasources",
          ],
          name: "Github",
          pluginId: "60916df3f41c6d1ea7e23d0f",
          organizationId: "60b0137977bd5c1e8d9f276c",
          datasourceConfiguration: {
            sshProxyEnabled: false,
            properties: [
              { key: "isSendSessionEnabled", value: "N" },
              { key: "sessionSignatureKey", value: "" },
            ],
            url: "https://api.github.com",
            headers: [
              {
                key: "Authorization",
                value:
                  "Basic TmlraGlsLU5hbmRhZ29wYWw6ODJjY2ZlMDljN2M4MDU5M2VkOTRjZTI1OTA0OTEyYmQ1OTA0NWJmNA==",
              },
              { key: "Accept", value: "application/vnd.github.v3+json" },
            ],
          },
          invalids: [],
          messages: [],
          isValid: true,
          new: false,
        },
        {
          id: "60b016ed77bd5c1e8d9f2773",
          userPermissions: [
            "execute:datasources",
            "manage:datasources",
            "read:datasources",
          ],
          name: "Super Updates DB",
          pluginId: "60916df3f41c6d1ea7e23d0e",
          organizationId: "60b0137977bd5c1e8d9f276c",
          datasourceConfiguration: {
            connection: { mode: "READ_WRITE", ssl: { authType: "DEFAULT" } },
            endpoints: [
              {
                host: "fake-api.cvuydmurdlas.us-east-1.rds.amazonaws.com",
                port: 5432,
              },
            ],
            authentication: {
              authenticationType: "dbAuth",
              username: "fakeapi",
              databaseName: "fakeapi",
            },
            sshProxyEnabled: false,
          },
          invalids: [],
          messages: [],
          isValid: true,
          new: false,
        },
      ],
    }) as any;
  }

  static createDatasource(datasourceConfig: Partial<Datasource>): Promise<any> {
    return API.post(DatasourcesApi.url, datasourceConfig);
  }

  static testDatasource(datasourceConfig: Partial<Datasource>): Promise<any> {
    return API.post(`${DatasourcesApi.url}/test`, datasourceConfig, undefined, {
      timeout: DEFAULT_TEST_DATA_SOURCE_TIMEOUT_MS,
    });
  }

  static updateDatasource(
    datasourceConfig: Partial<Datasource>,
    id: string,
  ): Promise<any> {
    return API.put(DatasourcesApi.url + `/${id}`, datasourceConfig);
  }

  static deleteDatasource(id: string): Promise<any> {
    return API.delete(DatasourcesApi.url + `/${id}`);
  }

  static fetchDatasourceStructure(
    id: string,
    ignoreCache = false,
  ): Promise<any> {
    return API.get(
      DatasourcesApi.url + `/${id}/structure?ignoreCache=${ignoreCache}`,
    );
  }
}

export default DatasourcesApi;
