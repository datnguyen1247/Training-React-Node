import { ActionList, Icon, Modal, Popover } from "@shopify/polaris";
import { MenuHorizontalIcon } from "@shopify/polaris-icons";
import { useCallback, useState } from "react";

type DotAction = {
  onDeleteTranslation: (id: number) => void;
  id: number;
};
export default function DotAction({ onDeleteTranslation, id }: DotAction) {
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive((active) => !active), []);
  const [activeModal, setActiveModal] = useState(false);

  const toggleModal = useCallback(
    () => setActiveModal((active) => !active),
    []
  );
  const handleClickDelete = () => {
    onDeleteTranslation(id);
  };
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
        <Modal
          activator={activator}
          open={activeModal}
          onClose={toggleModal}
          title="Remove 1 language?"
          primaryAction={{
            destructive: true,
            content: "Delete",
            onAction: handleClickDelete,
          }}
          secondaryActions={[
            {
              content: "Cancel",
              onAction: toggleModal,
            },
          ]}
        >
          <Modal.Section>This can’t be undone.</Modal.Section>
        </Modal>
      )}
    </div>
  );
}
