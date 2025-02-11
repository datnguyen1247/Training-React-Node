import { ActionList, Frame, Icon, Modal, Popover } from "@shopify/polaris";
import { MenuHorizontalIcon } from "@shopify/polaris-icons";
import { useCallback, useState } from "react";
export default function DotAction() {
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive((active) => !active), []);
  const [activeModal, setActiveModal] = useState(false);

  const toggleModal = useCallback(
    () => setActiveModal((active) => !active),
    []
  );

  const activator = (
    <div style={{ padding: "4px" }} onClick={toggleActive}>
      <Icon source={MenuHorizontalIcon} tone="base" />
    </div>
  );

  return (
    <div>
      <Popover
        active={active}
        activator={activator}
        autofocusTarget="first-node"
        onClose={toggleActive}
      >
        <ActionList
          actionRole="menuitem"
          items={[
            { content: "Edit" },
            {
              content: "Delete",
              destructive: true,
              onAction: toggleModal,
            },
          ]}
        />
      </Popover>
      {activeModal && (
        <Frame>
          <Modal
            activator={activator}
            open={activeModal}
            onClose={toggleModal}
            title="Remove 1 language?"
            primaryAction={{
              destructive: true,
              content: "Cancel",
              onAction: toggleModal,
            }}
            secondaryActions={[
              {
                content: "Delete",
                onAction: toggleModal,
              },
            ]}
          >
            <Modal.Section>This can’t be undone.</Modal.Section>
          </Modal>
        </Frame>
      )}
    </div>
  );
}
