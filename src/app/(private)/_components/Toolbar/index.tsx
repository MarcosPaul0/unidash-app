import {
  Collapsible,
  CollapsibleContent,
} from "@unidash/components/Collapsible";
import { ToolbarProps } from "./toolbar.interface";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@unidash/components/Breadcrumb";
import { LinkButton } from "@unidash/components/LinkButton";
import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import { Fragment } from "react";

export function Toolbar({
  breadcrumbItems,
  breadcrumbPage,
  addLink,
  children,
}: ToolbarProps) {
  return (
    <Collapsible>
      <div className="flex items-center justify-between border-b-1 border-muted pb-1">
        {breadcrumbPage && (
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbItems &&
                breadcrumbItems.map((item) => (
                  <Fragment key={item.label}>
                    <BreadcrumbItem>
                      <BreadcrumbLink href={item.link}>
                        {item.label}
                      </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />
                  </Fragment>
                ))}

              <BreadcrumbItem>
                <BreadcrumbPage>{breadcrumbPage}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        )}

        {children}

        <div>
          {addLink && (
            <LinkButton href={addLink.link} variant="filled" size="md">
              <PlusIcon />
              {addLink.label}
            </LinkButton>
          )}
        </div>
      </div>

      <CollapsibleContent>
        <div>
          {/* <FormSelect
              control={control}
              label="Filtrar por ano"
              name="year"
              options={[
                { label: "2022", value: "2022" },
                { label: "2023", value: "2023" },
                { label: "2024", value: "2024" },
                { label: "2025", value: "2025" },
              ]}
            /> */}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
